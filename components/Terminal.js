"use client";
import { useEffect, useRef, useState } from 'react';

const Terminal = () => {
  const [lines, setLines] = useState([
    "Welcome to Anubhab's Terminal Portfolio!",
`█
           _nnnn_                         
          dGGGGMMb     ,"""""""""""".  
         @p~qp~~qMb    | Linux Rules! | 
         M|@||@) M|   _;..............' 
         @,----.JM| -'                  
        JS^\__/  qKL                       █████╗ ███╗   ██╗██╗   ██╗██████╗ ██╗  ██╗ █████╗ ██████╗
       dZP        qKRb                   ██╔══██╗████╗  ██║██║   ██║██╔══██╗██║  ██║██╔══██╗██╔══██╗
     dZP          qKKb                   ███████║██╔██╗ ██║██║   ██║██████╔╝███████║███████║██████╔╝
     fZP            SMMb                 ██╔══██║██║╚██╗██║██║   ██║██╔══██╗██╔══██║██╔══██║██╔══██╗
     HZM            MMMM                 ██║  ██║██║ ╚████║╚██████╔╝██████╔╝██║  ██║██║  ██║██████╔╝
     FqM            MMMM                 ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝
   __| ".        |\dS"qML
   |    \`.       | \`' \Zq
  _)      \.___.,|     .'
  \____   )MMMMMM|   .'
       \`-'       \`--' hjm

`,
    'Type "help" to see available commands.'
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    // Auto-scroll to the bottom whenever lines change
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [lines]);

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim() !== '') {
        processCommand(input.trim());
        setHistory([...history, input.trim()]);
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(historyIndex - 1, 0);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? -1 : Math.min(historyIndex + 1, history.length - 1);
        setHistoryIndex(newIndex);
        setInput(newIndex === -1 ? '' : history[newIndex]);
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
        newLines.push('<span class="command-output">Available commands:</span>');
        newLines.push(
          '<span class="command-output text-orange-500">whois</span> - Information about Anubhab'
        );
        newLines.push(
          '<span class="command-output text-orange-500">skills</span> - View my technical skills'
        );
        newLines.push(
          '<span class="command-output text-orange-500">projects</span> - Showcase of my projects'
        );
        newLines.push(
          '<span class="command-output text-orange-500">experience</span> - My work experience'
        );
        newLines.push(
          '<span class="command-output text-orange-500">social</span> - Links to my social profiles'
        );
        newLines.push(
          '<span class="command-output text-orange-500">email</span> - My contact email'
        );
        newLines.push(
          '<span class="command-output text-orange-500">resume</span> - Link to my resume'
        );
        newLines.push(
          '<span class="command-output text-orange-500">history</span> - View command history'
        );
        newLines.push(
          '<span class="command-output text-orange-500">clear</span> - Clear the terminal'
        );
        break;
      case 'whois':
        newLines.push(
          '<span class="command-output">Anubhab Mukherjee is a Computer Science Engineering student at Heritage Institute of Technology.</span>'
        );
        newLines.push(
          '<span class="command-output">He has a passion for web development, machine learning, and blockchain.</span>'
        );
        break;
      case 'skills':
        newLines.push('<span class="command-output">Technical Skills:</span>');
        newLines.push('<span class="command-output">- Languages: JavaScript, Python, Java, C</span>');
        newLines.push('<span class="command-output">- Frontend: React.js, Next.js, HTML, CSS, Tailwind CSS</span>');
        newLines.push('<span class="command-output">- Backend: Node.js, Express.js, Flask, Django</span>');
        newLines.push('<span class="command-output">- Database: MongoDB, MySQL, Firebase</span>');
        newLines.push('<span class="command-output">- ML/AI: TensorFlow, PyTorch, Keras, Scikit-Learn</span>');
        newLines.push('<span class="command-output">- Tools: Git, Linux, Firebase, ESP32, Arduino</span>');
        break;
      case 'projects':
        newLines.push('<span class="command-output">Some of my notable projects:</span>');
        newLines.push('<span class="command-output">1. School Dropout Analysis Website (MERN stack)</span>');
        newLines.push('<span class="command-output">2. Emotion-powered Chatbot (Cloudflare API, OpenCV)</span>');
        newLines.push('<span class="command-output">3. Anime Notification App (React Native)</span>');
        newLines.push(
          '<a href="https://anubhabmukherjee2003.github.io/portfolio/" target="_blank" class="command-output text-orange-500 underline">Check my portfolio for more</a>'
        );
        break;
      case 'experience':
        newLines.push(
          '<span class="command-output">Experience includes developing full-stack web apps, participating in hackathons, and building IoT projects for smart systems.</span>'
        );
        newLines.push(
          '<span class="command-output">He has also worked on precision farming and lunar crater research projects.</span>'
        );
        break;
      case 'social':
        newLines.push('<span class="command-output">Find me online:</span>');
        newLines.push(
          '<span class="command-output">LinkedIn: <a href="https://www.linkedin.com/in/anubhab-mukherjee-b98049284/" target="_blank" class="command-output text-orange-500 underline">LinkedIn Profile</a></span>'
        );
        newLines.push(
          '<span class="command-output">GitHub: <a href="https://github.com/AnubhabMukherjee2003" target="_blank" class="command-output text-orange-500 underline">GitHub Profile</a></span>'
        );
        newLines.push(
          '<span class="command-output">Twitter: <a href="https://twitter.com/your_twitter_handle" target="_blank" class="command-output text-orange-500 underline">Twitter Profile</a></span>'
        );
        break;
      case 'email':
        newLines.push('<span class="command-output">Feel free to reach out:</span>');
        newLines.push(
          '<a href="mailto:antucruse621@gmail.com" class="command-output text-orange-500 underline">antucruse621@gmail.com</a>'
        );
        break;
      case 'resume':
        newLines.push('<span class="command-output">You can view and download my resume here:</span>');
        newLines.push(
          '<a href="/path/to/your/resume.pdf" target="_blank" class="command-output text-orange-500 underline">Download Resume</a>'
        );
        break;
      case 'history':
        newLines.push('<span class="command-output">Command History:</span>');
        history.forEach((cmd, idx) => {
          newLines.push(`<span class="command-output">${cmd}</span>`);
        });
        break;
      case 'clear':
        setLines([]);
        return;
      default:
        newLines.push(
          `<span class="command-output text-red-500">Error:</span> command not found: ${command}`
        );
        break;
    }

    setLines(newLines);
  };

  return (
    <>
      <div id="screen" onClick={() => inputRef.current.focus()}>
        <img src="/scanlines.png" alt="scan" id="scan" />
        
        <div id="content" ref={contentRef}>
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
