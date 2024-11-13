"use client";
import { useEffect, useRef, useState } from 'react';

const Terminal = () => {
  const [lines, setLines] = useState([
    "Welcome to Anubhab's Terminal Portfolio!",
    `#  █████╗ ███╗   ██╗██╗   ██╗██████╗ ██╗  ██╗ █████╗ ██████╗ 
# ██╔══██╗████╗  ██║██║   ██║██╔══██╗██║  ██║██╔══██╗██╔══██╗
# ███████║██╔██╗ ██║██║   ██║██████╔╝███████║███████║██████╔╝
# ██╔══██║██║╚██╗██║██║   ██║██╔══██╗██╔══██║██╔══██║██╔══██╗
# ██║  ██║██║ ╚████║╚██████╔╝██████╔╝██║  ██║██║  ██║██████╔╝
# ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ `,
    'Type "help" to see available commands.',
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim() !== '') {
        processCommand(input.trim());
        setHistory([...history, input.trim()]);
        setInput('');
      }
    }
  };

  const processCommand = (command) => {
    let newLines = [
      ...lines,
      `<span class="text-green-400">visitor@anubhab:~$ ${command}</span>`,
    ];

    switch (command.toLowerCase()) {
      case 'help':
        newLines.push('Available commands:');
        newLines.push(
          '<span class="pl-10 text-yellow-300">whois</span> - Information about Anubhab'
        );
        newLines.push(
          '<span class="text-yellow-300 pl-10">skills</span> - View my technical skills'
        );
        newLines.push(
          '<span class="text-yellow-300 pl-10">projects</span> - Showcase of my projects'
        );
        newLines.push(
          '<span class="text-yellow-300 pl-10">experience</span> - My work experience'
        );
        newLines.push(
          '<span class="text-yellow-300 pl-10">social</span> - Links to my social profiles'
        );
        newLines.push(
          '<span class="text-yellow-300 pl-10">email</span> - My contact email'
        );
        newLines.push(
          '<span class="text-yellow-300 pl-10">resume</span> - Link to my resume'
        );
        newLines.push(
          '<span class="text-yellow-300 pl-10">history</span> - View command history'
        );
        newLines.push(
          '<span class="text-yellow-300 pl-10">clear</span> - Clear the terminal'
        );
        break;
      case 'whois':
        newLines.push(
          'Anubhab Mukherjee is a Computer Science Engineering student at Heritage Institute of Technology.'
        );
        newLines.push(
          'He has a passion for web development, machine learning, and space research projects.'
        );
        break;
      case 'skills':
        newLines.push('Technical Skills:');
        newLines.push('- Languages: JavaScript, Python, Java, C');
        newLines.push('- Frontend: React.js, Next.js, HTML, CSS, Tailwind CSS');
        newLines.push('- Backend: Node.js, Express.js, Flask, Django');
        newLines.push('- Database: MongoDB, MySQL, Firebase');
        newLines.push('- ML/AI: TensorFlow, PyTorch, Keras, Scikit-Learn');
        newLines.push('- Tools: Git, Docker, Linux, Firebase, ESP32, Arduino');
        break;
      case 'projects':
        newLines.push('Some of my notable projects:');
        newLines.push('1. School Dropout Analysis Website (MERN stack)');
        newLines.push('2. Emotion-powered Chatbot (Cloudflare API, OpenCV)');
        newLines.push('3. Anime Notification App (React Native)');
        newLines.push(
          '<a href="https://anubhabmukherjee2003.github.io/portfolio/" target="_blank" class="text-blue-400 underline">Check my portfolio for more</a>'
        );
        break;
      case 'experience':
        newLines.push(
          'Experience includes developing full-stack web apps, participating in hackathons, and building IoT projects for smart systems.'
        );
        newLines.push(
          'He has also worked on precision farming and lunar crater research projects.'
        );
        break;
      case 'social':
        newLines.push('Find me online:');
        newLines.push(
          'LinkedIn: <a href="https://www.linkedin.com/in/anubhab-mukherjee-b98049284/" target="_blank" class="text-blue-400 underline">LinkedIn Profile</a>'
        );
        newLines.push(
          'GitHub: <a href="https://github.com/AnubhabMukherjee2003" target="_blank" class="text-blue-400 underline">GitHub Profile</a>'
        );
        newLines.push(
          'Twitter: <a href="https://twitter.com/your_twitter_handle" target="_blank" class="text-blue-400 underline">Twitter Profile</a>'
        );
        break;
      case 'email':
        newLines.push('Feel free to reach out:');
        newLines.push(
          '<a href="mailto:antucruse621@gmail.com" class="text-blue-400 underline">antucruse621@gmail.com</a>'
        );
        break;
      case 'resume':
        newLines.push('You can view and download my resume here:');
        newLines.push(
          '<a href="/path/to/your/resume.pdf" target="_blank" class="text-blue-400 underline">Download Resume</a>'
        );
        break;
      case 'history':
        newLines.push('Command History:');
        history.forEach((cmd, idx) => {
          newLines.push(`${idx + 1}: ${cmd}`);
        });
        break;
      case 'clear':
        setLines([]);
        return;
      default:
        newLines.push(
          `<span class="text-red-500">Error:</span> command not found: ${command}`
        );
        break;
    }

    setLines(newLines);
  };

  return (
    <>
      <div id="screen" onClick={() => inputRef.current.focus()}>
        <img src="/scanlines.png" alt="scan" id="scan" />
        
        <div id="content">
          {lines.map((line, index) => (
            <p
              key={index}
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
          <div className="terminal-line">
            <span className="pr-2 text-green-400">visitor@anubhab:~$</span>
            <div className="flex-1 relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleInput}
                className="terminal-input"
                autoComplete="off"
              />
              <span
                className="blinking-cursor"
                style={{
                  '--cursor-position': input.length,
                  opacity: showCursor ? 1 : 0
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminal;
