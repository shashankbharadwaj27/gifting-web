import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { clockDesigns } from '../assets/clockDesigns';

const ClockEditor = () => {
  const [images, setImages] = useState([]); // [{ src, left, top, width, height }]
  const [dragging, setDragging] = useState(false);
  const dragIndexRef = useRef(null);
  const startRef = useRef({});
  const [clock, setClock] = useState(null);

  const clockSize = 300;
  const { clockId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const found = clockDesigns.find(c => c.id === clockId);
    if (!found) {
      navigate('/');
    } else {
      setClock(found);
    }
  }, [clockId, navigate]);

  const handleMultiImageChange = (e, index) => {
    const file = e.target.files?.[0];
    if (!file || !clock?.slots?.[index]) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const slot = clock.slots[index];
        const scaledWidth = Math.min(img.width, slot.width);
        const scaledHeight = Math.min(img.height, slot.height);
        const left = slot.x + (slot.width - scaledWidth) / 2;
        const top = slot.y + (slot.height - scaledHeight) / 2;

        const newImages = [...images];
        newImages[index] = {
          src: event.target.result,
          left,
          top,
          width: scaledWidth,
          height: scaledHeight,
        };
        setImages(newImages);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const scaledWidth = Math.min(img.width, clockSize);
        const scaledHeight = Math.min(img.height, clockSize);
        const left = (clockSize - scaledWidth) / 2;
        const top = (clockSize - scaledHeight) / 2;
        setImages([
          {
            src: event.target.result,
            left,
            top,
            width: scaledWidth,
            height: scaledHeight,
          },
        ]);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const startDrag = (e, index) => {
    e.preventDefault();
    setDragging(true);
    dragIndexRef.current = index;
    startRef.current = {
      x: e.clientX,
      y: e.clientY,
      ...images[index],
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging || dragIndexRef.current === null) return;

    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    const index = dragIndexRef.current;
    const slot = clock.slots?.[index] ?? { x: 0, y: 0, width: clockSize, height: clockSize };

    let newLeft = startRef.current.left + dx;
    let newTop = startRef.current.top + dy;

    newLeft = Math.max(slot.x, Math.min(slot.x + slot.width - startRef.current.width, newLeft));
    newTop = Math.max(slot.y, Math.min(slot.y + slot.height - startRef.current.height, newTop));

    const updatedImages = [...images];
    updatedImages[index] = {
      ...updatedImages[index],
      left: newLeft,
      top: newTop,
    };
    setImages(updatedImages);
  };

  const handleMouseUp = () => {
    setDragging(false);
    dragIndexRef.current = null;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  if (!clock) return null;

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-start min-h-screen p-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Clock Editor & Preview</h2>

        <div className="flex flex-col items-center mb-8">
          {Array.isArray(clock.slots) && clock.slots.length > 0 ? (
            <div className={`grid ${clock.slots.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-4 mb-6`}>
              {clock.slots.map((_, index) => (
                <label
                  key={index}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow cursor-pointer text-center"
                >
                  Upload Photo {index + 1}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleMultiImageChange(e, index)}
                  />
                </label>
              ))}
            </div>
          ) : (
            <label className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded cursor-pointer shadow mb-6">
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          )}
        </div>

        <div
          className={`relative overflow-hidden ${dragging ? 'cursor-grabbing' : ''}`}
          style={{ width: clockSize, height: clockSize }}
        >
          {/* Render user images */}
          {images.map((img, index) => (
            img?.src && (
              <img
                key={index}
                src={img.src}
                alt={`Uploaded ${index + 1}`}
                className="absolute z-10 object-cover rounded"
                style={{
                  left: img.left,
                  top: img.top,
                  width: img.width,
                  height: img.height,
                }}
                draggable={false}
                onMouseDown={(e) => startDrag(e, index)}
              />
            )
          ))}

          {/* Clock face image */}
          <img
            src={clock.svg}
            alt="Clock Face"
            className="rounded overflow-hidden absolute z-20 pointer-events-none"
            style={{ width: clockSize, height: clockSize }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClockEditor;
