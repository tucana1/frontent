'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.css'; // Ensure this CSS module exists
import { useState, useRef } from 'react';

export default function Page() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
  
  return (
    <div className={styles.container}>
      <Image
        src="/newFile.jpg" // Ensure the image is located in the public directory
        alt="New File"
        width={300} // Adjust width as needed
        height={300} // Adjust height as needed
        className={styles.image}
      />
      <Link href="/calendar" className={styles.link}>Go to Calendar
      </Link>
      <button onClick={togglePlay}>
                {isPlaying ? 'Pause' : 'Play'} Music
        </button>
           <audio ref={audioRef} src="/audio.mp3" />
    </div>
  );
}
