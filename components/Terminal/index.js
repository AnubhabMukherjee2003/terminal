"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { processCommand } from './commands';
import { WELCOME_ASCII_DESKTOP, WELCOME_ASCII_MOBILE } from './ascii';

const Terminal = () => {
  const [lines, setLines] = useState([
    "Welcome to Anubhab's Terminal Portfolio!",
    `${WELCOME_ASCII_MOBILE}`, // Placeholder for ASCII art
    'Type "help" to see available commands.'
  ]);
  const [input, setInput] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    // This runs on the client side
    const initialAscii = window.innerWidth <= 1100 ? WELCOME_ASCII_MOBILE : WELCOME_ASCII_DESKTOP;
    setLines((prevLines) => {
      const newLines = [...prevLines];
      newLines[1] = initialAscii;
      return newLines;
    });

    const handleResize = () => {
      const updatedAscii = window.innerWidth <= 1100 ? WELCOME_ASCII_MOBILE : WELCOME_ASCII_DESKTOP;
      setLines((prevLines) => {
        const newLines = [...prevLines];
        newLines[1] = updatedAscii;
        return newLines;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim() !== '') {
        const newLines = processCommand(input.trim(), lines, history);
        setLines(newLines);
        setHistory([...history, input.trim()]);
        setHistoryIndex(-1);
        setInput('');
        setCursorPosition(0);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(historyIndex - 1, 0);
        setHistoryIndex(newIndex);
        const newCommand = history[newIndex];
        setInput(newCommand);
        setCursorPosition(newCommand.length);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? -1 : Math.min(historyIndex + 1, history.length - 1);
        setHistoryIndex(newIndex);
        const newCommand = newIndex === -1 ? '' : history[newIndex];
        setInput(newCommand);
        setCursorPosition(newCommand.length);
      }
    } else {
      // Update cursor position
      setTimeout(() => {
        setCursorPosition(e.target.selectionStart);
      }, 0);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    setCursorPosition(e.target.selectionStart);
  };

  const handleCursorPosition = () => {
    if (inputRef.current) {
      setCursorPosition(inputRef.current.selectionStart);
    }
  };

  return (
    <div id="screen" onClick={() => inputRef.current.focus()}>
      <Image src="/scanlines.png" alt="scan" id="scan" layout="fill" />
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
              onChange={handleChange}
              onKeyDown={handleInput}
              onClick={handleCursorPosition}
              onKeyUp={handleCursorPosition}
              className="terminal-input"
              autoComplete="off"
            />
            <span
              className="blinking-cursor"
              style={{
                left: `${cursorPosition}ch`,
                opacity: showCursor ? 1 : 0
              }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;