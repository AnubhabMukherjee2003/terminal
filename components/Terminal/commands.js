import { WELCOME_ASCII_DESKTOP, WELCOME_ASCII_MOBILE } from "./ascii";

export const processCommand = (command, lines, history) => {
  let newLines = [
    ...lines,
    `<span class="prompt">visitor@anubhab:~$ ${command}</span>`,
  ];

  switch (command.toLowerCase()) {
    case "help":
      newLines.push(
        '<span class="command-output helpp">Available commands:</span>'
      );
      newLines.push(
        '<span class="command-output helpp">whoami</span> - Information about Anubhab'
      );
      newLines.push(
        '<span class="command-output helpp">skills</span> - View my technical skills'
      );
      newLines.push(
        '<span class="command-output helpp">projects</span> - Showcase of my projects'
      );
      newLines.push(
        '<span class="command-output helpp">experience</span> - My work experience'
      );
      newLines.push(
        '<span class="command-output helpp">social</span> - Links to my social profiles'
      );
      newLines.push(
        '<span class="command-output helpp">email</span> - My contact email'
      );
      newLines.push(
        '<span class="command-output helpp">resume</span> - See my cv'
      );
      newLines.push(
        '<span class="command-output helpp">banner</span> - See my banner'
      );
      newLines.push(
        '<span class="command-output helpp">history</span> - View command history'
      );
      newLines.push(
        '<span class="command-output helpp">clear</span> - Clear the terminal'
      );
      newLines.push(
        ' '
      );
      newLines.push(
        'Having Trouble in Terminal? <a href="https://anubhabmukherjee2003.github.io/portfolio/" target="_blank" class="text-orange-500 underline">Check my GUI Portfolio</a>'
      );
      break;
    case "whoami":
      newLines.push(
        '<span class="command-output">Anubhab Mukherjee is a Computer Science Engineering student at Heritage Institute of Technology.</span>'
      );
      newLines.push(
        '<span class="command-output">He is passionate about web development and decentralized technologies.</span>'
      );
      newLines.push(
        '<span class="command-output">Anubhab enjoys building innovative projects that combine his skills in software development and web3 world.</span>'
      );
      newLines.push(
        '<span class="command-output">He has worked on several projects, see them in <a href="https://github.com/AnubhabMukherjee2003" target="_blank" class="text-orange-500 underline">Github</a></span>'
      );
      break;
    case "skills":
      newLines.push('<span class="command-output helpp">Technical Skills:</span>');
      newLines.push(
        '<span class="command-output">- Languages: JavaScript, Python, C, C++</span>'
      );
      newLines.push(
        '<span class="command-output">- Frontend: React.js, Tailwind CSS</span>'
      );
      newLines.push(
        '<span class="command-output">- Backend: Php, Node.js, Express.js, Flask, Django</span>'
      );
      newLines.push('<span class="command-output">- Framework: Next.js</span>');
      newLines.push(
        '<span class="command-output">- Database: MongoDB, MySQL, Firebase, PostgreSQL</span>'
      );
      newLines.push(
        '<span class="command-output">- Blockchain: Solidity, Ethers.js, Hardhat, Foundry, IPFS</span>'
      );
      newLines.push(
        '<span class="command-output">- Tools: Git, Linux, Firebase, ESP32, Arduino</span>'
      );
      newLines.push('<span class="command-output"></span>');
      newLines.push('<span class="command-output"></span>');
      newLines.push('<span class="command-output">And, I Use ARCH btw</span>');
      break;
    case "projects":
      newLines.push('<span class="command-output helpp">Some of my projects:</span>');

      newLines.push('<span class="command-output helpp">Web2 Projects -</span>');
      newLines.push(
        '<span class="command-output">1. Simple Portfolio (HTML ,CSS ,JS) <a href="https://anubhabmukherjee2003.github.io/portfolio/" target="_blank" class="text-orange-500 underline">Website</a></span>'
      );
      newLines.push(
        '<span class="command-output">2. CV Builder (React) <a href="https://github.com/AnubhabMukherjee2003/odin-cvBuilder" target="_blank" class="text-orange-500 underline">GIthub</a></span>'
      );
      newLines.push(
        '<span class="command-output">3. Members Only : Auth App (Express, PostgreSQL) <a href="https://github.com/AnubhabMukherjee2003/odin-members" target="_blank" class="text-orange-500 underline">GIthub</a></span>'
      );
      newLines.push(
        '<span class="command-output">4. NewsLikeReels : News Blogging Website (PHP, MySQL) <a href="https://github.com/AnubhabMukherjee2003/NewsLikeReels" target="_blank" class="text-orange-500 underline">GIthub</a></span>'
      );
      newLines.push(
        '<span class="command-output">5. WheAnime : Anime Airing Tracker (JS) <a href="https://github.com/AnubhabMukherjee2003/whenAnime" target="_blank" class="text-orange-500 underline">GIthub</a></span>'
      );
      newLines.push('<span class="command-output helpp">Web3 Projects -</span>');

      newLines.push(
        '<span class="command-output">6. TickTicket - Decentralized Ticketing Platform (React, Web3) <a href="https://github.com/AnubhabMukherjee2003/tickticket" target="_blank" class="text-orange-500 underline">GIthub</a></span>'
      );
      newLines.push(
        '<span class="command-output">7. ERC20 Token Deployment on Sepolia Testnet (Solidity, Hardhat) <a href="https://github.com/AnubhabMukherjee2003/erc20Token-ANTU" target="_blank" class="text-orange-500 underline">GIthub</a></span>'
      );
      newLines.push(
        '<span class="command-output">8. ECDSA Node Authorization (Node.js, Crypto, ECDSA) <a href="https://github.com/AnubhabMukherjee2003/ECDSA-Node" target="_blank" class="text-orange-500 underline">GIthub</a></span>'
      );
      newLines.push('<span class="command-output helpp">IOT Projects -</span>');

      newLines.push(
        '<span class="command-output">9. Smart Irrigation System (IoT, Firebase, ESP32)</span>'
      );

      newLines.push(
        '<a href="https://github.com/AnubhabMukherjee2003" target="_blank" class="command-output text-orange-500 underline">Check my Github for more projects</a>'
      );
      break;

      case "experience":
        newLines.push(
          '<span class="command-output">Experience includes developing production-level full-stack web applications using technologies like Next.js, Node.js, and Tailwind CSS.</span>'
        );
        newLines.push(
          '<span class="command-output">Worked in freelance project , delivering responsive and dynamic business <a href="https://github.com/AnubhabMukherjee2003/Nightingale" target="_blank" class="text-orange-500 underline">Website</a> tailored to client requirements.</span>'
        );
        newLines.push(
          '<span class="command-output">Participated in multiple hackathons, building innovative solutions in the domains of web development and blockchain.</span>'
        ); 
        newLines.push(
          '<span class="command-output">Contributed to academic research with a publication titled "Phone Patrol: An Intelligent Surveillance System for Mobile-Free Environments" in <a href="https://ieeexplore.ieee.org/document/10885738" target="_blank" class="text-orange-500 underline">IEEE Xplore</a>.</span>'
        );
        break;
      

    case "social":
      newLines.push('<span class="command-output helpp">Find me online:</span>');
      newLines.push(
        '<span class="command-output">LinkedIn: <a href="https://www.linkedin.com/in/anubhab-mukherjee-b98049284/" target="_blank" class="command-output text-orange-500 underline">LinkedIn Profile</a></span>'
      );
      newLines.push(
        '<span class="command-output">GitHub: <a href="https://github.com/AnubhabMukherjee2003" target="_blank" class="command-output text-orange-500 underline">GitHub Profile</a></span>'
      );
      newLines.push(
        '<span class="command-output">X: <a href="https://x.com/Anubhab621" target="_blank" class="command-output text-orange-500 underline">X Profile</a></span>'
      );
      break;
    case "email":
      newLines.push(
        '<span class="command-output">Feel free to reach out:</span>'
      );
      newLines.push(
        '<a href="mailto:anubhabmukherjee621@gmail.com" class="command-output text-orange-500 underline">anubhabmukherjee621@gmail.com</a>'
      );
      break;
    case "resume":
      newLines.push(
        '<span class="command-output">You can view and download my resume here:</span>'
      );
      newLines.push(
        '<a href="/resume.pdf" target="_blank" class="command-output text-orange-500 underline">Download Resume</a>'
      );
      break;
    case "banner":
      newLines.push(
        window.innerWidth <= 1100 ? WELCOME_ASCII_MOBILE : WELCOME_ASCII_DESKTOP
      );
      break;
    case "history":
      newLines.push('<span class="command-output helpp">Command History:</span>');
      history.forEach((cmd, idx) => {
        newLines.push(`<span class="command-output">${cmd}</span>`);
      });
      break;
    case "clear":
      return [];
    default:
      newLines.push(
        `<span class="command-output text-red-500">Error:</span> command not found: ${command}`
      );
      newLines.push(
        `<span class="command-output">type 'help' to know available commands</span>`
      );
      newLines.push(
        ' '
      );
      newLines.push(
        `<span class="command-output helpp">Having Trouble in Terminal? <a href="https://anubhabmukherjee2003.github.io/portfolio/" target="_blank" class="text-orange-500 underline">Check my GUI Portfolio</a></span>`
      );
      newLines.push(
      '');
      break;
  }

  return newLines;
};
