import React, { useState, useRef, useEffect } from "react";
import { IoCalendar } from "react-icons/io5";

interface DatePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({ value = "", onChange, placeholder = "dd-mm-yyyy", className = "", disabled = false }) => {
  const [displayValue, setDisplayValue] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Format tanggal dari yyyy-mm-dd (format dari input type="date") ke dd-mm-yyyy
  const formatDateForDisplay = (dateString: string): string => {
    if (!dateString) return "";

    try {
      const [year, month, day] = dateString.split("-");
      if (year && month && day) {
        return `${day}-${month}-${year}`;
      }
    } catch (error) {
      console.error("Error formatting date:", error);
    }

    return dateString;
  };

  // Format tanggal dari dd-mm-yyyy ke yyyy-mm-dd untuk input type="date"
  const formatDateForInput = (dateString: string): string => {
    if (!dateString) return "";

    try {
      const [day, month, year] = dateString.split("-");
      if (year && month && day) {
        return `${year}-${month}-${day}`;
      }
    } catch (error) {
      console.error("Error formatting date:", error);
    }

    return dateString;
  };

  // Inisialisasi nilai tampilan saat komponen di-mount atau nilai berubah
  useEffect(() => {
    setDisplayValue(formatDateForDisplay(value));
  }, [value]);

  // Tutup kalender saat klik di luar komponen
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle perubahan tanggal dari input langsung (ketika user mengetik)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setDisplayValue(inputValue);

    // Validasi format tanggal dd-mm-yyyy
    const datePattern = /^(\d{2})-(\d{2})-(\d{4})$/;
    if (datePattern.test(inputValue)) {
      const formattedDate = formatDateForInput(inputValue);
      if (onChange) {
        onChange(formattedDate);
      }
    }
  };

  // Handle perubahan dari date picker
  const handleDatePickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value; // Format yyyy-mm-dd

    if (onChange) {
      onChange(selectedDate);
    }

    setDisplayValue(formatDateForDisplay(selectedDate));
    setShowCalendar(false);
  };

  // Toggle kalender saat ikon diklik
  const toggleCalendar = () => {
    if (!disabled) {
      setShowCalendar(!showCalendar);
      if (!showCalendar && dateInputRef.current) {
        dateInputRef.current.focus();
      }
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={displayValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-3 py-2   border-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${disabled ? "bg-gray-100" : ""}`}
          onClick={() => !disabled && setShowCalendar(true)}
        />
        <div className={`absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-600 ${disabled ? "text-gray-400 cursor-not-allowed" : ""}`} onClick={toggleCalendar}>
          <IoCalendar size={20} />
        </div>
      </div>

      {showCalendar && !disabled && (
        <div className="absolute left-0 mt-1 z-10 bg-white shadow-lg rounded p-2">
          <input ref={dateInputRef} type="date" value={formatDateForInput(displayValue)} onChange={handleDatePickerChange} className="w-full border border-gray-300 rounded px-2 py-1.5" />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
