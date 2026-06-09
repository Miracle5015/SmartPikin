import { useState, useRef, DragEvent, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, Plus, BookOpen, Check, FileText } from 'lucide-react';
import { BOOKS } from '../data';
import { Book } from '../types';

export default function BookLibrary() {
  const [booksList, setBooksList] = useState<Book[]>(BOOKS);
  const [isUploading, setIsUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAge, setNewBookAge] = useState('Ages 4-7');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle Drag Over
  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle Drop
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      initializeBookUpload(file.name);
    }
  };

  // Handle File Input Click Select
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      initializeBookUpload(file.name);
    }
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const initializeBookUpload = (fileName: string) => {
    // Strip file extension to prefill title
    const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.')) || fileName;
    setNewBookTitle(nameWithoutExt);
    setShowModal(true);
  };

  const handleCreateBook = (e: FormEvent) => {
    e.preventDefault();
    if (!newBookTitle.trim()) return;

    setIsUploading(true);

    // Simulate short, polished interactive delay
    setTimeout(() => {
      const emojis = ['📔', '📖', '🦖', '🎨', '🧩', '🐝', '🦄', '🌠'];
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      const bgColors = [
        'bg-amber-50 border-amber-100',
        'bg-emerald-50 border-emerald-110',
        'bg-indigo-50 border-indigo-100',
        'bg-sky-50 border-sky-100',
        'bg-rose-50 border-rose-100',
        'bg-purple-50 border-purple-100'
      ];
      const randomBg = bgColors[Math.floor(Math.random() * bgColors.length)];

      const newBook: Book = {
        id: `custom-${Date.now()}`,
        title: newBookTitle,
        ageRange: newBookAge,
        icon: randomEmoji,
        bg: randomBg
      };

      setBooksList([newBook, ...booksList]);
      setIsUploading(false);
      setShowModal(false);
      setNewBookTitle('');
    }, 1000);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24" id="books">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-[#e8f7ff] text-sky-dark font-black text-xs md:text-sm px-4.5 py-1.5 rounded-full border-2 border-[#b5dcf0] mb-4">
            📚 Our Library
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a2e3b] mb-4 tracking-tight leading-tight">
            A World of Books Awaits
          </h2>
          <p className="text-[#3d5a70] text-base md:text-lg font-bold">
            Hundreds of age-appropriate titles ready to read — or drag and drop your own favorites to add them instantly!
          </p>
        </div>

        {/* Horizontal Drag-To-Scroll Row */}
        <div className="overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-sky-100 scrollbar-track-transparent">
          <div className="flex gap-6 px-4 py-2 min-w-max">
            
            {/* Custom Interactive File Uploader Card */}
            <div
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              onClick={triggerFileSelect}
              className={`w-52 h-64 rounded-3xl border-3 border-dashed flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-all ${
                dragActive
                  ? 'border-sky-dark bg-sky-50/70 scale-[0.98]'
                  : 'border-sky-main hover:border-sky-dark bg-sky-50/15 hover:bg-sky-50/40'
              } group`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="w-14 h-14 rounded-full bg-white border border-sky-100 flex items-center justify-center text-sky-main group-hover:scale-110 group-hover:text-sky-dark group-hover:border-sky-200 transition-all shadow-sm mb-4">
                <Upload className="w-6 h-6" />
              </div>
              <span className="font-display text-base text-sky-dark mb-1">
                Upload Your Book
              </span>
              <p className="text-[#6d8ea2] text-xs font-semibold leading-relaxed max-w-[140px]">
                Drag &amp; drop or click to add PDF or images
              </p>
            </div>

            {/* Rendered Book Shelf */}
            <AnimatePresence initial={false}>
              {booksList.map((book) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, scale: 0.8, x: -50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 50 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className={`w-48 h-64 rounded-3xl p-5 text-center flex flex-col justify-between border-2 transition-all hover:shadow-[0_8px_32px_rgba(56,182,232,0.1)] hover:-translate-y-1.5 select-none ${book.bg}`}
                >
                  <div className="text-5xl my-auto select-none filter drop-shadow-md">
                    {book.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-sm text-[#1a2e3b] leading-snug line-clamp-2 px-1 mb-2">
                      {book.title}
                    </h4>
                    <span className="inline-block bg-white text-sky-dark text-[10px] md:text-xs font-extrabold px-3 py-1 rounded-full border border-sky-100/60 shadow-sm uppercase tracking-wide">
                      {book.ageRange}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-[#6b8fa3] text-sm font-bold flex items-center justify-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-500" />
            Uploaded books are processed client-side and saved into your temporary reading companion session.
          </p>
        </div>
      </div>

      {/* Book Customization Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border-2 border-sky-100"
            >
              <h3 className="font-display text-2xl text-[#1a2e3b] mb-2 flex items-center gap-2">
                <FileText className="text-sky-main w-6 h-6" />
                Configure New Book
              </h3>
              <p className="text-[#6b8fa3] text-sm font-semibold mb-6">
                Tell us about your newly uploaded storybook so Smart Pikin can auto-calibrate reading feedback levels.
              </p>

              <form onSubmit={handleCreateBook}>
                <div className="mb-4">
                  <label className="block text-xs font-black text-[#3d5a70] uppercase tracking-wider mb-2">
                    Book Title
                  </label>
                  <input
                    type="text"
                    required
                    value={newBookTitle}
                    onChange={(e) => setNewBookTitle(e.target.value)}
                    placeholder="e.g. Nursery Rhymes, Math Grade 2"
                    className="w-full p-3 border-2 border-sky-100 rounded-xl focus:border-sky-main focus:ring-1 focus:ring-sky-main/50 outline-none font-bold text-sm text-[#1a2e3b] bg-sky-50/10"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-black text-[#3d5a70] uppercase tracking-wider mb-2">
                    Child's Age Range
                  </label>
                  <select
                    value={newBookAge}
                    onChange={(e) => setNewBookAge(e.target.value)}
                    className="w-full p-3 border-2 border-sky-100 rounded-xl focus:border-sky-main focus:ring-1 focus:ring-sky-main/50 outline-none font-bold text-sm text-[#1a2e3b] bg-sky-50/10"
                  >
                    <option value="Ages 2-3">🍼 Ages 2–3</option>
                    <option value="Ages 4-5">🌱 Ages 4–5</option>
                    <option value="Ages 6-8">📖 Ages 6–8</option>
                    <option value="Ages 9-12">🚀 Ages 9–12</option>
                  </select>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="w-1/2 py-3 border-2 border-sky-100 text-[#3d5a70] hover:bg-sky-50 font-bold rounded-full transition-colors text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isUploading}
                    className="w-1/2 py-3 bg-sky-main hover:bg-sky-dark text-white font-black rounded-full shadow-md transition-all text-sm flex items-center justify-center gap-1.5"
                  >
                    {isUploading ? (
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        Add To Shelf
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
