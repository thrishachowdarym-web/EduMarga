import { useState, useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";
import { Calendar as CalendarIcon, Plus, Trash2, Check, X, Clock } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

type TaskMap = {
  [dateKey: string]: Task[];
};

export function CalendarWidget() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [tasks, setTasks] = useState<TaskMap>({});
  const [newTaskText, setNewTaskText] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);

  // Load tasks from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("learnpath:calendar-tasks");
      if (stored) {
        setTasks(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load calendar tasks:", e);
    }
  }, []);

  // Save tasks to localStorage when they change
  const saveTasks = (newTasks: TaskMap) => {
    setTasks(newTasks);
    try {
      localStorage.setItem("learnpath:calendar-tasks", JSON.stringify(newTasks));
    } catch (e) {
      console.error("Failed to save calendar tasks:", e);
    }
  };

  // Close calendar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Don't render on login, signup, forgot password, or root path
  const hidePaths = ["/", "/signup", "/forgot-password"];
  if (hidePaths.includes(location.pathname)) {
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

  return (
    <div ref={widgetRef} className="fixed top-6 right-6 z-[9998] font-sans">
      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close Study Calendar" : "Open Study Calendar"}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-xl shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary/35 hover:border-primary/50 text-cyan cursor-pointer"
        style={{ boxShadow: "var(--shadow-glow)" }}
      >
        <CalendarIcon className="size-5" />
      </button>

      {/* Calendar & Tasks Panel */}
      <div
        className={`absolute right-0 top-14 w-[350px] max-w-[calc(100vw-2rem)] origin-top-right transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          className="glass-card relative flex flex-col rounded-2xl border border-primary/20 p-5 shadow-2xl"
          style={{ background: "var(--card-surface-96)" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-primary/10 pb-3 mb-3">
            <h3 className="text-sm font-semibold text-gradient-brand flex items-center gap-1.5">
              <CalendarIcon className="size-4 text-cyan" />
              Study Calendar
            </h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-cyan transition-colors"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Calendar Picker */}
          <div className="flex justify-center bg-secondary/15 rounded-xl p-1 border border-primary/5">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border-0"
            />
          </div>

          {/* Divider */}
          <div className="h-px bg-primary/10 my-3" />

          {/* Task Section */}
          <div className="flex flex-col flex-1 min-h-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                <Clock className="size-3.5" />
                {formattedDateString}
              </span>
              <span className="text-[10px] bg-primary/10 border border-primary/20 text-cyan px-2 py-0.5 rounded-full font-medium">
                {currentTasks.length} {currentTasks.length === 1 ? "task" : "tasks"}
              </span>
            </div>

            {/* Task list */}
            <div className="max-h-[150px] overflow-y-auto space-y-2 pr-1 mb-3 scrollbar-thin">
              {currentTasks.length === 0 ? (
                <p className="text-xs text-muted-foreground/60 text-center py-4">
                  No study tasks scheduled for this day.
                </p>
              ) : (
                currentTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between gap-2 p-2 rounded-lg bg-secondary/20 border border-primary/5 group"
                  >
                    <button
                      type="button"
                      onClick={() => toggleTask(task.id)}
                      className={`flex size-4.5 shrink-0 items-center justify-center rounded border transition-colors cursor-pointer ${
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
                      className="text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 p-0.5"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Add Task Form */}
            <form onSubmit={handleAddTask} className="flex gap-2">
              <input
                type="text"
                placeholder="Add a study goal..."
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                className="flex-1 h-9 rounded-xl border border-input bg-secondary/40 px-3 text-xs text-foreground outline-none transition-all focus:border-primary/60 focus:bg-secondary/60 focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                disabled={!newTaskText.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 cursor-pointer"
                style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
              >
                <Plus className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
