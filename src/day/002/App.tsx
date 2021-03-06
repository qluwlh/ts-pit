import React from 'react';
import { useState, useEffect } from 'react';

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
  const [first, setfirst] = useState(9);
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState<Student | null>(null);
  useEffect(() => {
    mockService().then((res) => {
      setStudents(res);
      setStudent(res[0]);
      setfirst(res[0].age);
    });
  }, []);

  return <div></div>;
}

export default App;
