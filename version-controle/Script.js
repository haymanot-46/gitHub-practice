 document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
      
            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const dob = document.getElementById('dob').value;
            const gender = document.querySelector('input[name="gender"]:checked');
            const bloodGroup = document.getElementById('bloodGroup').value;
            const course = document.getElementById('course').value;
            
            // Validation
            if (!firstName || !lastName || !email || !phone || !dob || !gender || !bloodGroup || !course) {
                showMessage('Please fill in all required fields!', 'error');
                return;
            }

            //data validation
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showMessage('Please enter a valid email address!', 'error');
                return;
            }
            
            // Phone validation (basic)
            if (phone.length < 10) {
                showMessage('Please enter a valid phone number!', 'error');
                return;
            }
            
            // Get hobbies
            const hobbies = [];
            document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
                hobbies.push(checkbox.value);
            });
            
            // Success message
            const message = `
                ✅ Registration Successful!<br><br>
                <strong>Student Details:</strong><br>
                Name: ${firstName} ${lastName}<br>
                Email: ${email}<br>
                Phone: ${phone}<br>
                Date of Birth: ${dob}<br>
                Gender: ${gender.value}<br>
                Blood Group: ${bloodGroup}<br>
                Course: ${course}<br>
                Hobbies: ${hobbies.length ? hobbies.join(', ') : 'None'}<br>
                Address: ${document.getElementById('address').value || 'Not provided'}
            `;
            
            showMessage(message, 'success');
            
            // Optional: Reset form after 3 seconds
            setTimeout(function() {
                document.getElementById('registrationForm').reset();
                document.getElementById('message').style.display = 'none';
            }, 5000);
        });
        
        function showMessage(msg, type) {
            const messageDiv = document.getElementById('message');
            messageDiv.innerHTML = msg;
            messageDiv.className = 'message ' + type;
            messageDiv.style.display = 'block';
            
            // Scroll to message
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }