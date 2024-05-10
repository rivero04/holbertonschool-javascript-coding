const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  const students = lines.filter((line, index) => line && index > 0);

  const fields = {};

  students.forEach((student) => {
    const info = student.split(',');
    const field = info[3];
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(info[0]);
  });

  console.log(`Number of students: ${students.length}`);
  for (const field in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      console.log(
        `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
      );
    }
  }
}

module.exports = countStudents;
