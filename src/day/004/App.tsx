import React from 'react';
import { useState, useEffect, useMemo } from 'react';

interface Student {
  name: string;
  age: number;
}
const mockService = () =>
  Promise.resolve<Student[]>([
    { name: 's1', age: 8 },
    { name: 's2', age: 7 },
  ]);
function App() {
  const [students, setStudents] = useState([]);
  useMemo(() => {}, []);
  useEffect(() => {
    mockService().then((res) => {
      setStudents(res);
    });
  }, []);

  return <div></div>;
}

export default App;
