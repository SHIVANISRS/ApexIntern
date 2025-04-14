// app.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMsg = document.getElementById('formError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!name || !email || !message) {
      errorMsg.textContent = 'Please fill in all fields.';
      errorMsg.style.color = 'red';
    } else if (!emailPattern.test(email)) {
      errorMsg.textContent = 'Enter a valid email address.';
      errorMsg.style.color = 'red';
    } else {
        errorMsg.textContent = 'Form submitted successfully!';
        errorMsg.style.color = 'green';
        alert('Form submitted successfully');
        document.getElementById('contactForm').reset();
      }
      
  });
  
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  
  addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      li.textContent = taskText;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'X';
      removeBtn.style.marginLeft = '10px';
      removeBtn.onclick = () => li.remove();
  
      li.appendChild(removeBtn);
      taskList.appendChild(li);
      taskInput.value = '';
    }
  });