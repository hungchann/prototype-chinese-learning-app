export interface User {
  id: string;
  username: string;
  preferences: {
    darkMode: boolean;
    language: 'en' | 'zh';
  };
}

export interface Content {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  type: 'article' | 'podcast' | 'video' | 'book';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration?: number;
}

export interface Article extends Content {
  content: {
    chinese: string;
    pinyin: string;
    english: string;
  }[];
  audio?: string;
}

export interface Podcast extends Content {
  audioUrl: string;
  transcript: {
    timestamp: number;
    chinese: string;
    english: string;
  }[];
}

export interface Video extends Content {
  videoUrl: string;
  subtitles: {
    timestamp: number;
    chinese: string;
    english: string;
  }[];
}

export interface Book extends Content {
  chapters: {
    id: string;
    title: string;
    content: {
      chinese: string;
      pinyin: string;
      english: string;
    }[];
  }[];
}

export interface UserProgress {
  contentId: string;
  progress: number;
  lastAccessed: string;
  bookmarks: string[];
  savedWords: {
    word: string;
    pinyin: string;
    translation: string;
  }[];
} 