const [isDragging, setIsDragging] = useState(false);
const [prevX, setPrevX] = useState(null);

const handleMouseDown = (e) => {
  setIsDragging(true);
  setPrevX(e.clientX);
};

const handleMouseMove = (e) => {
  if (!isDragging || prevX === null) return;
  const deltaX = e.clientX - prevX;
  meshRef.current.rotation.y += deltaX * 0.01; // Faster rotation
  setPrevX(e.clientX);
};

const handleMouseUp = () => {
  setIsDragging(false);
  setPrevX(null);
};

useEffect(() => {
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };
}, [isDragging, prevX]);

return (
  <mesh
    ref={meshRef}
    onPointerDown={handleMouseDown}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}
  >
    {/* geometry + material */}
  </mesh>
);
