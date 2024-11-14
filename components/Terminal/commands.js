import { WELCOME_ASCII } from './ascii';
export const processCommand = (command, lines, history) => {
  let newLines = [
    ...lines,
    `<span class="text-green-400">visitor@anubhab:~$ ${command}</span>`,
  ];

  switch (command.toLowerCase()) {
    case 'help':
      newLines.push('<span class="command-output">Available commands:</span>');
      newLines.push(
        '<span class="command-output text-orange-500">whoami</span> - Information about Anubhab'
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
        '<span class="command-output text-orange-500">resume</span> - See my cv'
      );
      newLines.push(
        '<span class="command-output text-orange-500">banner</span> - See my banner'
      );
      newLines.push(
        '<span class="command-output text-orange-500">history</span> - View command history'
      );
      newLines.push(
        '<span class="command-output text-orange-500">clear</span> - Clear the terminal'
      );
      break;
    case 'whoami':
      newLines.push(
        '<span class="command-output">Anubhab Mukherjee is a Computer Science Engineering student at Heritage Institute of Technology.</span>'
      );
      newLines.push(
        '<span class="command-output">He has a passion for web development, machine learning, and blockchain.</span>'
      );
      newLines.push(
        '<span class="command-output">Anubhab enjoys building innovative projects that combine his skills in software development and AI research.</span>'
      );
      newLines.push(
        '<span class="command-output">He has worked on several impactful projects, including a Smart Irrigation System, an Image-Based Search for Lunar Craters, and a Parsing Tool for Social Media Feeds.</span>'
      );
      newLines.push(
        '<span class="command-output">His skills span from frontend and backend development to AI frameworks like TensorFlow and PyTorch.</span>'
      );
      break;
    case 'skills':
      newLines.push('<span class="command-output">Technical Skills:</span>');
      newLines.push('<span class="command-output">- Languages: JavaScript, Python, Java, C, C++</span>');
      newLines.push('<span class="command-output">- Frontend: React.js, Tailwind CSS</span>');
      newLines.push('<span class="command-output">- Backend: Php, Node.js, Express.js, Flask, Django</span>');
      newLines.push('<span class="command-output">- Framework: Next.js</span>');
      newLines.push('<span class="command-output">- Database: MongoDB, MySQL, Firebase</span>');
      newLines.push('<span class="command-output">- ML/AI: TensorFlow, PyTorch, Keras, Scikit-Learn</span>');
      newLines.push('<span class="command-output">- Tools: Git, Linux, Firebase, ESP32, Arduino</span>');
      break;
    case 'projects':
      newLines.push('<span class="command-output">Some of my notable projects:</span>');
      newLines.push('<span class="command-output">1. School Dropout Analysis Website (MERN stack)</span>');
      newLines.push('<span class="command-output">2. Emotion-powered Chatbot (Cloudflare API, OpenCV)</span>');
      newLines.push('<span class="command-output">3. Anime Notification App (React Native)</span>');
      newLines.push('<span class="command-output">4. Smart Irrigation System (IoT, Firebase)</span>');
      newLines.push('<span class="command-output">5. news blogging website (Php)</span>');
      newLines.push(
        '<a href="https://anubhabmukherjee2003.github.io/portfolio/" target="_blank" class="command-output text-orange-500 underline">Check my gui portfolio for more projects</a>'
      );
      break;
    case 'experience':
      newLines.push(
        '<span class="command-output">Experience includes developing production level full-stack web applications using technologies like Next.js, Node.js, and Tailwind CSS.</span>'
      );
      newLines.push(
        '<span class="command-output">Participated in multiple hackathons, tackling complex challenges such as parsing social media feeds and implementing smart irrigation systems using IoT and real-time data analysis.</span>'
      );
      newLines.push(
        '<span class="command-output">Worked on research projects including precision farming solutions and enhancing lunar crater images for scientific research.</span>'
      );
      newLines.push(
        '<span class="command-output">Developed machine learning models and custom algorithms to optimize performance in data analysis and interpretation tasks.</span>'
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
    case 'banner':
      newLines.push(WELCOME_ASCII);
      
      break;
    case 'history':
      newLines.push('<span class="command-output">Command History:</span>');
      history.forEach((cmd, idx) => {
        newLines.push(`<span class="command-output">${cmd}</span>`);
      });
      break;
    case 'clear':
      return [];
    default:
      newLines.push(
        `<span class="command-output text-red-500">Error:</span> command not found: ${command}`
      );
      newLines.push(
        `<span class="command-output">type 'help' to know available commands</span>`
      );
      break;
  }

  return newLines;
};