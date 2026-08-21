import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import {
  Calendar as CalendarIcon,
  Sun,
  Moon,
  User,
  BookOpen,
  Settings,
  LogOut,
  GraduationCap,
  Sparkles,
  Check,
  Trash2,
  Plus,
  Clock,
  X,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "@/lib/theme";
import { Calendar } from "@/components/ui/calendar";
import logoImg from "@/assets/logo.png";

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

type TaskMap = {
  [dateKey: string]: Task[];
};

type UserProfile = {
  name: string;
  email: string;
  role?: string;
};

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Hide Navbar on login, signup, forgot-password, faculty-login
  const hidePaths = ["/", "/signup", "/forgot-password", "/faculty-login"];
  const shouldHide = hidePaths.includes(location.pathname);

  // Dynamic user profile state
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  // State for Schedule dropdown
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [tasks, setTasks] = useState<TaskMap>({});
  const [newTaskText, setNewTaskText] = useState("");
  const scheduleRef = useRef<HTMLDivElement>(null);

  // State for Profile dropdown
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Load user profile & calendar tasks from localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("learnpath:user");
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
      const storedTasks = localStorage.getItem("learnpath:calendar-tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (e) {
      console.error("Failed to load user or tasks:", e);
    }
  }, [location.pathname]);

  const saveTasks = (newTasks: TaskMap) => {
    setTasks(newTasks);
    try {
      localStorage.setItem("learnpath:calendar-tasks", JSON.stringify(newTasks));
    } catch (e) {
      console.error("Failed to save calendar tasks:", e);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (scheduleRef.current && !scheduleRef.current.contains(event.target as Node)) {
        setScheduleOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (shouldHide) {
    return null;
  }

  const getDateKey = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const selectedKey = selectedDate ? getDateKey(selectedDate) : "";
  const currentTasks = selectedKey ? (tasks[selectedKey] ?? []) : [];

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim() || !selectedKey) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      text: newTaskText.trim(),
      completed: false,
    };

    const updatedTasks = {
      ...tasks,
      [selectedKey]: [...currentTasks, newTask],
    };

    saveTasks(updatedTasks);
    setNewTaskText("");
  };

  const toggleTask = (taskId: string) => {
    if (!selectedKey) return;
    const updatedTasks = {
      ...tasks,
      [selectedKey]: currentTasks.map((t) =>
        t.id === taskId ? { ...t, completed: !t.completed } : t,
      ),
    };
    saveTasks(updatedTasks);
  };

  const deleteTask = (taskId: string) => {
    if (!selectedKey) return;
    const updatedTasks = {
      ...tasks,
      [selectedKey]: currentTasks.filter((t) => t.id !== taskId),
    };
    saveTasks(updatedTasks);
  };

  const formattedDateString = selectedDate
    ? selectedDate.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
    : "No date selected";

  const handleLogout = () => {
    setProfileOpen(false);
    try {
      localStorage.removeItem("learnpath:auth-token");
      localStorage.removeItem("learnpath:user");
    } catch {
      // ignore
    }
    setCurrentUser(null);
    navigate({ to: "/" });
  };

  // Dynamic user name and details
  const displayName = currentUser?.name || "Student";
  const displayEmail = currentUser?.email || "student@gmail.com";
  const roleLabel = currentUser?.role === "faculty" ? "Faculty Educator" : "Enrolled Student";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border/40 backdrop-blur-xl bg-background/80 transition-colors duration-300 font-sans shadow-sm"
      style={{
        boxShadow: "0 4px 20px -2px oklch(0 0 0 / 0.15)",
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LEFT SIDE: Brand Logo + LearnPath AI */}
        <Link
          to="/"
          className="flex items-center gap-3 group transition-opacity hover:opacity-90 cursor-pointer"
        >
          <div className="relative flex size-9 items-center justify-center overflow-hidden rounded-full border border-primary/40 bg-card shadow-sm transition-transform duration-300 group-hover:scale-105">
            <img
              src={logoImg}
              alt="EduMarga Logo"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="sync"
            />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-gradient-brand sm:text-xl">
            EduMarga
          </span>
        </Link>

        {/* RIGHT SIDE: Faculty, Schedule, Theme, Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Faculty Button */}
          <Link
            to="/faculty-login"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-foreground transition-all duration-200 hover:border-primary/60 hover:bg-primary/20 hover:text-cyan cursor-pointer"
          >
            <GraduationCap className="size-3.5 text-cyan" />
            <span>Faculty</span>
          </Link>

          {/* Schedule Button & Popup */}
          <div ref={scheduleRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setScheduleOpen((o) => !o);
                setProfileOpen(false);
              }}
              aria-label="Toggle Schedule"
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                scheduleOpen
                  ? "border-cyan bg-cyan/15 text-cyan"
                  : "border-primary/30 bg-secondary/30 text-foreground/90 hover:border-primary/60 hover:bg-primary/15 hover:text-cyan"
              }`}
            >
              <CalendarIcon className="size-3.5 text-cyan" />
              <span className="hidden sm:inline">Schedule</span>
            </button>

            {/* Schedule Popup Panel */}
            <div
              className={`absolute right-0 top-12 w-[340px] max-w-[calc(100vw-2rem)] origin-top-right transition-all duration-200 z-50 ${
                scheduleOpen
                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-95 opacity-0"
              }`}
            >
              <div
                className="glass-card relative flex flex-col rounded-2xl border border-primary/20 p-4 shadow-2xl"
                style={{ background: "var(--card-surface-97)" }}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-primary/10 pb-2.5 mb-2.5">
                  <h3 className="text-sm font-semibold text-gradient-brand flex items-center gap-1.5">
                    <CalendarIcon className="size-4 text-cyan" />
                    Study Schedule & Goals
                  </h3>
                  <button
                    type="button"
                    onClick={() => setScheduleOpen(false)}
                    className="text-muted-foreground hover:text-cyan transition-colors"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                {/* Calendar Picker */}
                <div className="flex justify-center bg-secondary/20 rounded-xl p-1 border border-primary/5">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border-0"
                  />
                </div>

                {/* Divider */}
                <div className="h-px bg-primary/10 my-2.5" />

                {/* Task Section */}
                <div className="flex flex-col flex-1 min-h-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {formattedDateString}
                    </span>
                    <span className="text-[10px] bg-primary/10 border border-primary/20 text-cyan px-2 py-0.5 rounded-full font-medium">
                      {currentTasks.length} {currentTasks.length === 1 ? "goal" : "goals"}
                    </span>
                  </div>

                  {/* Task list */}
                  <div className="max-h-[130px] overflow-y-auto space-y-1.5 pr-1 mb-2.5 scrollbar-thin">
                    {currentTasks.length === 0 ? (
                      <p className="text-xs text-muted-foreground/60 text-center py-3">
                        No study goals scheduled for this day.
                      </p>
                    ) : (
                      currentTasks.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center justify-between gap-2 p-1.5 rounded-lg bg-secondary/30 border border-primary/5 group"
                        >
                          <button
                            type="button"
                            onClick={() => toggleTask(task.id)}
                            className={`flex size-4 shrink-0 items-center justify-center rounded border transition-colors cursor-pointer ${
                              task.completed
                                ? "bg-cyan border-cyan text-black"
                                : "border-primary/30 hover:border-cyan"
                            }`}
                          >
                            {task.completed && <Check className="size-3" />}
                          </button>
                          <span
                            className={`text-xs flex-1 break-all transition-all ${
                              task.completed ? "line-through text-muted-foreground/50" : "text-foreground/90"
                            }`}
                          >
                            {task.text}
                          </span>
                          <button
                            type="button"
                            onClick={() => deleteTask(task.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100 p-0.5"
                          >
                            <Trash2 className="size-3.5" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Add Task Form */}
                  <form onSubmit={handleAddTask} className="flex gap-1.5">
                    <input
                      type="text"
                      placeholder="Add a daily study goal..."
                      value={newTaskText}
                      onChange={(e) => setNewTaskText(e.target.value)}
                      className="flex-1 h-8 rounded-xl border border-input bg-secondary/40 px-2.5 text-xs text-foreground outline-none transition-all focus:border-primary/60 focus:bg-secondary/60 focus:ring-1 focus:ring-primary/20"
                    />
                    <button
                      type="submit"
                      disabled={!newTaskText.trim()}
                      className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 cursor-pointer"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="flex size-8 items-center justify-center rounded-full border border-primary/30 bg-secondary/30 text-foreground transition-all duration-200 hover:border-primary/60 hover:bg-primary/20 hover:text-cyan cursor-pointer"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <Sun className="size-4 text-amber-300 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="size-4 text-cyan transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Profile Dropdown */}
          <div ref={profileRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setProfileOpen((o) => !o);
                setScheduleOpen(false);
              }}
              aria-label="Open Profile Menu"
              className={`flex items-center gap-1.5 rounded-full border p-1 sm:px-2.5 sm:py-1 text-xs font-medium transition-all duration-200 cursor-pointer ${
                profileOpen
                  ? "border-primary bg-primary/20 text-cyan shadow-sm"
                  : "border-primary/30 bg-secondary/30 text-foreground hover:border-primary/60 hover:bg-primary/15"
              }`}
            >
              <div className="flex size-6 items-center justify-center rounded-full border border-primary/40 bg-primary/20 text-cyan">
                <User className="size-3.5" />
              </div>
              <span className="hidden sm:inline font-semibold text-xs text-foreground/90 max-w-[100px] truncate">
                {displayName}
              </span>
              <ChevronDown className="hidden sm:inline size-3 text-muted-foreground transition-transform duration-200" />
            </button>

            {/* Profile Menu Dropdown */}
            <div
              className={`absolute right-0 top-12 w-56 origin-top-right transition-all duration-200 z-50 ${
                profileOpen
                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-95 opacity-0"
              }`}
            >
              <div
                className="glass-card flex flex-col rounded-2xl border border-primary/20 p-2 shadow-2xl backdrop-blur-2xl"
                style={{ background: "var(--card-surface-97)" }}
              >
                {/* User Summary Header */}
                <div className="border-b border-primary/10 px-3 py-2.5">
                  <p className="text-xs font-semibold text-foreground truncate">{displayName}</p>
                  <p className="text-[11px] text-muted-foreground truncate">{displayEmail}</p>
                  <span className="mt-1.5 inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-cyan">
                    <Sparkles className="size-2.5" />
                    {roleLabel}
                  </span>
                </div>

                {/* Navigation Items */}
                <div className="py-1 space-y-0.5">
                  <Link
                    to="/profile"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-foreground/90 transition-colors hover:bg-primary/20 hover:text-cyan"
                  >
                    <User className="size-4 text-cyan" />
                    <span>My Profile</span>
                  </Link>

                  <Link
                    to="/courses"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-foreground/90 transition-colors hover:bg-primary/20 hover:text-cyan"
                  >
                    <BookOpen className="size-4 text-cyan" />
                    <span>My Courses</span>
                  </Link>

                  <Link
                    to="/settings"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-foreground/90 transition-colors hover:bg-primary/20 hover:text-cyan"
                  >
                    <Settings className="size-4 text-cyan" />
                    <span>Settings</span>
                  </Link>
                </div>

                {/* Logout Action */}
                <div className="border-t border-primary/10 pt-1">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-destructive transition-colors hover:bg-destructive/15 cursor-pointer"
                  >
                    <LogOut className="size-4" />
                    <span>Log Out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
