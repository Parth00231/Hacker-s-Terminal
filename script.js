document.addEventListener('DOMContentLoaded', function() {
            const terminalOutput = document.getElementById('terminal-output');
            const startBtn = document.getElementById('start-btn');
            const resetBtn = document.getElementById('reset-btn');
            const progressBar = document.querySelector('.progress');
            
            const messages = [
                "Initialising Hacking",
                "Reading Your Files",
                "Password Files Detected",
                "Sending All Passwords And Personal Files To Server",
                "Cleaning Up"
            ];
            
            let isRunning = false;
            
            // Function to add a message to the terminal
            function addMessage(text, showBlinking = false) {
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message';
                
                // Add timestamp
                const now = new Date();
                const timestamp = `[${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}]`;
                
                messageDiv.innerHTML = `<span class="timestamp">${timestamp}</span> > ${text}`;
                
                if (showBlinking) {
                    const blinkingSpan = document.createElement('span');
                    blinkingSpan.className = 'blinking';
                    blinkingSpan.textContent = '...';
                    messageDiv.appendChild(blinkingSpan);
                }
                
                terminalOutput.appendChild(messageDiv);
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
            
            // Function to get random delay between 0 and 7 seconds
            function getRandomDelay() {
                return Math.floor(Math.random() * 7000);
            }
            
            // Function to update progress bar
            function updateProgress(percent) {
                progressBar.style.width = `${percent}%`;
            }
            
            // Main hacking simulation function
            async function startHacking() {
                if (isRunning) return;
                
                isRunning = true;
                startBtn.disabled = true;
                terminalOutput.innerHTML = '';
                
                for (let i = 0; i < messages.length; i++) {
                    if (!isRunning) break;
                    
                    const delay = getRandomDelay();
                    
                    // Wait for the random delay
                    await new Promise(resolve => setTimeout(resolve, delay));
                    
                    if (!isRunning) break;
                    
                    // Add the message with blinking ellipsis
                    addMessage(messages[i], true);
                    
                    // Update progress
                    updateProgress(((i + 1) / messages.length) * 100);
                }
                
                if (isRunning) {
                    addMessage("Hacking sequence completed");
                    addMessage("All data exfiltrated successfully");
                    
                    // Add final cursor
                    const finalMessage = document.createElement('div');
                    finalMessage.className = 'message';
                    finalMessage.innerHTML = '> <span class="cursor"></span>';
                    terminalOutput.appendChild(finalMessage);
                }
                
                isRunning = false;
                startBtn.disabled = false;
            }
            
            // Reset function
            function resetTerminal() {
                isRunning = false;
                terminalOutput.innerHTML = '';
                progressBar.style.width = '0%';
                
                addMessage("Terminal reset");
                addMessage("Ready for hacking sequence");
                
                const finalMessage = document.createElement('div');
                finalMessage.className = 'message';
                finalMessage.innerHTML = '> <span class="cursor"></span>';
                terminalOutput.appendChild(finalMessage);
                
                startBtn.disabled = false;
            }
            
            // Event listeners
            startBtn.addEventListener('click', startHacking);
            resetBtn.addEventListener('click', resetTerminal);
            
            // Initial cursor
            const initialCursor = document.createElement('div');
            initialCursor.className = 'message';
            initialCursor.innerHTML = '> <span class="cursor"></span>';
            terminalOutput.appendChild(initialCursor);
        });