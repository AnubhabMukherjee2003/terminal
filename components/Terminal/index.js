"use client";
import { useEffect, useRef, useState } from 'react';
import { processCommand } from './commands';
import { WELCOME_ASCII } from './ascii';

const Terminal = () => {
  const [lines, setLines] = useState([
    "Welcome to Anubhab's Terminal Portfolio!",
    WELCOME_ASCII,
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

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim() !== '') {
        const newLines = processCommand(input.trim(), lines, history);
        setLines(newLines);
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

  return (
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
  );
};

export default Terminal;