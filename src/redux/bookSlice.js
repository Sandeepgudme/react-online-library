import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    description: "Atomic Habits explains how small daily habits can create big life changes over time. It focuses on building good habits and breaking bad ones using simple techniques. The book emphasizes consistency over motivation. It is practical and easy to apply in daily life.",
    category: "Non-Fiction"
  },
  {
    id: 2,
    title: "Harry Potter",
    author: "J.K Rowling",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    description: "Harry Potter follows a young wizard discovering his magical powers. He studies at Hogwarts and faces challenges with friends and enemies. The story explores friendship, bravery, and destiny. It is one of the most famous fantasy series ever written.",
    category: "Fiction"
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    image: "https://covers.openlibrary.org/b/id/8101356-L.jpg",
    description: "Dune is set on a desert planet where power, politics, and survival collide. It follows Paul Atreides and his journey to leadership. The book explores themes of control, religion, and ecology. It is considered a masterpiece of science fiction.",
    category: "Sci-Fi"
  },
  {
    id: 4,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    image: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
    description: "Sapiens explores the history of humankind from ancient times to modern society. It explains how humans evolved and built civilizations. The book connects science, culture, and economics. It offers a deep understanding of human behavior.",
    category: "Non-Fiction"
  },
  {
    id: 5,
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    description: "The Alchemist tells the story of Santiago, a shepherd chasing his dreams. It focuses on listening to your heart and following your destiny. The book teaches important life lessons about courage and belief. It is simple yet deeply inspiring.",
    category: "Fiction"
  },
  {
    id: 6,
    title: "Foundation",
    author: "Isaac Asimov",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    description: "Foundation is a futuristic story about the fall and rise of civilizations. It introduces the concept of predicting the future using science. The book blends mathematics with storytelling. It is one of the greatest sci-fi series ever.",
    category: "Sci-Fi"
  },
  {
    id: 7,
    title: "1984",
    author: "George Orwell",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    description: "1984 presents a dystopian world controlled by surveillance and strict government rules. It follows Winston Smith as he questions authority. The book explores freedom, truth, and power. It remains highly relevant even today.",
    category: "Fiction"
  },
  {
    id: 8,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
    description: "This book compares two different approaches to money and wealth. It teaches financial literacy and smart investing. The focus is on building assets instead of relying on salary. It is a beginner-friendly guide to financial success.",
    category: "Non-Fiction"
  },
  {
    id: 9,
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    description: "The Hobbit follows Bilbo Baggins on an unexpected adventure. He journeys with dwarves to reclaim their treasure from a dragon. The story is filled with magic, danger, and friendship. It is a classic fantasy novel loved worldwide.",
    category: "Fiction"
  },
  {
    id: 10,
    title: "Interstellar",
    author: "Sci Author",
    image: "https://covers.openlibrary.org/b/id/8101356-L.jpg",
    description: "Interstellar explores space travel and survival beyond Earth. It focuses on time, gravity, and human emotions. The story shows the struggle to save humanity. It is both scientific and deeply emotional.",
    category: "Sci-Fi"
  },
  {
    id: 11,
    title: "Deep Work",
    author: "Cal Newport",
    image: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
    description: "Deep Work explains the importance of focused and distraction-free work. It teaches how to improve productivity and concentration. The book provides practical techniques for success. It is highly useful for students and professionals.",
    category: "Non-Fiction"
  },
  {
    id: 12,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/78b5ebc1-542a-4e28-9fbb-e68de632ae4f.png?bg_token=color.background.quaternary",
    description: "The book explains how habits are formed and how they can be changed. It introduces the habit loop concept. It focuses on improving daily routines. It is practical and based on real research.",
    category: "Non-Fiction"
  },
  {
    id: 13,
    title: "Zero to One",
    author: "Peter Thiel",
    image: "https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg",
    description: "Zero to One focuses on creating new ideas and innovation. It encourages thinking differently and building unique businesses. The book shares insights from successful startups. It is popular among entrepreneurs.",
    category: "Non-Fiction"
  },
  {
    id: 14,
    title: "Divergent",
    author: "Veronica Roth",
    image: "https://covers.openlibrary.org/b/id/7262161-L.jpg",
    description: "Divergent is set in a dystopian society divided into factions. It follows Tris as she discovers her unique identity. The story explores courage and rebellion. It is an engaging young adult novel.",
    category: "Fiction"
  },
  {
    id: 15,
    title: "The Martian",
    author: "Andy Weir",
    image: "https://covers.openlibrary.org/b/id/8370221-L.jpg",
    description: "The Martian tells the story of an astronaut stranded on Mars. He uses science and intelligence to survive. The book is both thrilling and humorous. It highlights human resilience and problem-solving.",
    category: "Sci-Fi"
  },
  {
    id: 16,
    title: "Mindset",
    author: "Carol Dweck",
    image: "https://images-na.ssl-images-amazon.com/images/I/71t4GuxLCuL.jpg",
    description: "Mindset explains the difference between fixed and growth mindset. It shows how beliefs affect success and learning. The book encourages continuous improvement. It is widely used in education and personal growth.",
    category: "Non-Fiction"
  },
  {
    id: 17,
    title: "Crushing It",
    author: "Gary Vee",
    image: "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg",
    description: "Crushing It focuses on building a personal brand using social media. It shares real success stories of entrepreneurs. The book encourages taking action and consistency. It is practical and motivational.",
    category: "Non-Fiction"
  },
  {
    id: 18,
    title: "Ready Player One",
    author: "Ernest Cline",
    image: "https://covers.openlibrary.org/b/id/8221251-L.jpg",
    description: "Ready Player One is set in a virtual reality world. It follows a young gamer searching for hidden clues. The story is full of adventure and technology. It is exciting and futuristic.",
    category: "Sci-Fi"
  },
  {
    id: 19,
    title: "The Book Thief",
    author: "Markus Zusak",
    image: "https://covers.openlibrary.org/b/id/8231996-L.jpg",
    description: "The Book Thief is set during World War II in Germany. It follows a girl who finds comfort in stealing books. The story is narrated by death. It is emotional and beautifully written.",
    category: "Fiction"
  },
  {
    id: 20,
    title: "Hooked",
    author: "Nir Eyal",
    image: "https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg",
    description: "Hooked explains how products are designed to keep users engaged. It introduces the Hook Model framework. The book focuses on psychology and behavior. It is useful for developers and designers.",
    category: "Non-Fiction"
  }
];

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;