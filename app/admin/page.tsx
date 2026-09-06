"use client";

import {
  Bell,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock,
  Home,
  LogOut,
  MessageSquare,
  MoreHorizontal,
  Send,
  Settings,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";

const bookings = [
  {
    guest: "Maria Santos",
    dates: "Sep 7 – Sep 9",
    guests: 4,
    status: "Confirmed",
  },
  {
    guest: "James Lee",
    dates: "Sep 10 – Sep 13",
    guests: 6,
    status: "Confirmed",
  },
  {
    guest: "Ana Cruz",
    dates: "Sep 16 – Sep 18",
    guests: 2,
    status: "Pending",
  },
];

const inquiries = [
  {
    name: "Joan Mendoza",
    question: "Is the villa available for 6 people?",
    time: "10 min ago",
    unread: true,
  },
  {
    name: "Kevin Tan",
    question: "Do you provide airport transfers?",
    time: "1 hr ago",
    unread: true,
  },
  {
    name: "Liza Ramos",
    question: "Can we check in earlier?",
    time: "3 hrs ago",
    unread: false,
  },
];

const calendarDays = [
  { day: 31, muted: true },
  { day: 1 },
  { day: 2 },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 6 },

  { day: 7, booking: "Maria" },
  { day: 8, booking: "Maria" },
  { day: 9, booking: "Maria" },
  { day: 10, booking: "James" },
  { day: 11, booking: "James" },
  { day: 12, booking: "James" },
  { day: 13, booking: "James" },

  { day: 14 },
  { day: 15 },
  { day: 16, booking: "Ana" },
  { day: 17, booking: "Ana" },
  { day: 18, booking: "Ana" },
  { day: 19 },
  { day: 20 },

  { day: 21 },
  { day: 22 },
  { day: 23 },
  { day: 24 },
  { day: 25 },
  { day: 26 },
  { day: 27 },

  { day: 28 },
  { day: 29 },
  { day: 30 },
  { day: 1, muted: true },
  { day: 2, muted: true },
  { day: 3, muted: true },
  { day: 4, muted: true },
];

export default function AdminDashboard() {
  const [selectedInquiry, setSelectedInquiry] = useState(inquiries[0]);
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-[#f7f8f5] text-[#172018]">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 border-r bg-white lg:flex lg:flex-col">
          <div className="border-b px-7 py-6">
            <div className="text-xl font-semibold tracking-wide text-[#285d35]">
              GARDEN VILLA
            </div>

            <div className="mt-0.5 text-[10px] tracking-[0.2em] text-gray-400">
              ADMIN
            </div>
          </div>

          <nav className="flex-1 space-y-1 p-4">
            <NavItem icon={Home} label="Overview" active />

            <NavItem icon={CalendarDays} label="Calendar" />

            <NavItem icon={MessageSquare} label="Inquiries" badge="3" />

            <NavItem icon={Users} label="Guests" />

            <div className="my-5 border-t" />

            <NavItem icon={Settings} label="Settings" />
          </nav>

          <div className="border-t p-4">
            <div className="flex items-center gap-3 rounded-lg p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#285d35] text-xs font-medium text-white">
                AD
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium">Admin</p>
                <p className="text-xs text-gray-400">Administrator</p>
              </div>

              <LogOut size={16} className="text-gray-400" />
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1">
          {/* Header */}
          <header className="flex h-20 items-center justify-between border-b bg-white px-6 lg:px-8">
            <div>
              <h1 className="text-lg font-semibold">Good morning 👋</h1>

              <p className="text-sm text-gray-500">
                Here's what's happening at Garden Villa.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <button className="relative text-gray-500">
                <Bell size={20} />

                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
              </button>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#285d35] text-xs font-medium text-white">
                AD
              </div>
            </div>
          </header>

          <div className="p-6 lg:p-8">
            {/* Quick status */}
            <div className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatusCard
                icon={CalendarDays}
                label="Today's Check-ins"
                value="2"
                detail="Next check-in at 2:00 PM"
              />

              <StatusCard
                icon={Home}
                label="Villa Status"
                value="Available"
                detail="Ready for the next guest"
              />

              <StatusCard
                icon={MessageSquare}
                label="New Questions"
                value="3"
                detail="2 need your response"
              />

              <StatusCard
                icon={Clock}
                label="Upcoming"
                value="3"
                detail="Reservations this month"
              />
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
              {/* Calendar */}
              <section className="rounded-xl border bg-white shadow-sm">
                <div className="flex items-center justify-between border-b p-5">
                  <div>
                    <h2 className="font-semibold">Reservation Calendar</h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Manage upcoming stays and availability.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="rounded-lg border p-2 hover:bg-gray-50">
                      <ChevronLeft size={16} />
                    </button>

                    <span className="min-w-28 text-center text-sm font-medium">
                      September 2026
                    </span>

                    <button className="rounded-lg border p-2 hover:bg-gray-50">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="p-5">
                  {/* Weekdays */}
                  <div className="grid grid-cols-7">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day) => (
                        <div
                          key={day}
                          className="pb-3 text-center text-xs font-medium text-gray-400"
                        >
                          {day}
                        </div>
                      ),
                    )}
                  </div>

                  {/* Calendar */}
                  <div className="grid grid-cols-7 overflow-hidden rounded-lg border">
                    {calendarDays.map((item, index) => (
                      <div
                        key={index}
                        className="relative min-h-24 border-b border-r p-2"
                      >
                        <span
                          className={`text-xs ${
                            item.muted ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {item.day}
                        </span>

                        {item.booking === "Maria" && (
                          <div className="mt-3 rounded-md bg-[#dfeee2] px-2 py-1 text-[10px] font-medium text-[#285d35]">
                            Maria Santos
                          </div>
                        )}

                        {item.booking === "James" && (
                          <div className="mt-3 rounded-md bg-[#e5edf5] px-2 py-1 text-[10px] font-medium text-[#315b82]">
                            James Lee
                          </div>
                        )}

                        {item.booking === "Ana" && (
                          <div className="mt-3 rounded-md bg-[#f4ead8] px-2 py-1 text-[10px] font-medium text-[#85652d]">
                            Ana Cruz
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="mt-4 flex gap-5 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#dfeee2]" />
                      Confirmed
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#e5edf5]" />
                      Upcoming
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#f4ead8]" />
                      Pending
                    </div>
                  </div>
                </div>
              </section>

              {/* Inquiries */}
              <section className="rounded-xl border bg-white shadow-sm">
                <div className="flex items-center justify-between border-b p-5">
                  <div>
                    <h2 className="font-semibold">Client Questions</h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Questions submitted through the website.
                    </p>
                  </div>

                  <span className="rounded-full bg-[#eaf3eb] px-2.5 py-1 text-xs font-medium text-[#285d35]">
                    3 new
                  </span>
                </div>

                {/* Inquiry list */}
                <div className="divide-y">
                  {inquiries.map((inquiry) => (
                    <button
                      key={inquiry.name}
                      onClick={() => setSelectedInquiry(inquiry)}
                      className={`w-full p-4 text-left transition hover:bg-gray-50 ${
                        selectedInquiry.name === inquiry.name
                          ? "bg-[#f6faf6]"
                          : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
                          <User size={16} className="text-gray-500" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex justify-between">
                            <p className="text-sm font-medium">
                              {inquiry.name}
                            </p>

                            <span className="text-[10px] text-gray-400">
                              {inquiry.time}
                            </span>
                          </div>

                          <p className="mt-1 truncate text-xs text-gray-500">
                            {inquiry.question}
                          </p>
                        </div>

                        {inquiry.unread && (
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#285d35]" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Selected question */}
                <div className="border-t p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">Question from</p>

                      <p className="text-sm font-semibold">
                        {selectedInquiry.name}
                      </p>
                    </div>

                    <button>
                      <MoreHorizontal size={18} className="text-gray-400" />
                    </button>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-sm leading-6 text-gray-700">
                      {selectedInquiry.question}
                    </p>
                  </div>

                  {/* AI suggestion */}
                  <div className="mt-4 rounded-lg border border-[#dce9df] bg-[#f5faf6] p-4">
                    <div className="flex gap-2">
                      <CircleHelp
                        size={16}
                        className="mt-0.5 shrink-0 text-[#285d35]"
                      />

                      <div>
                        <p className="text-xs font-semibold text-[#285d35]">
                          Suggested response
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-600">
                          Thanks for reaching out! We'd be happy to accommodate
                          your group. Garden Villa can comfortably accommodate
                          up to 6 guests.
                        </p>

                        <button
                          onClick={() =>
                            setMessage(
                              "Thanks for reaching out! We'd be happy to accommodate your group. Garden Villa can comfortably accommodate up to 6 guests.",
                            )
                          }
                          className="mt-3 text-xs font-medium text-[#285d35]"
                        >
                          Use this response
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Reply */}
                  <div className="mt-4">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write a response..."
                      rows={3}
                      className="w-full resize-none rounded-lg border bg-white p-3 text-sm outline-none focus:border-[#285d35] focus:ring-2 focus:ring-[#285d35]/10"
                    />

                    <div className="mt-2 flex justify-end">
                      <button className="flex items-center gap-2 rounded-lg bg-[#285d35] px-4 py-2 text-xs font-medium text-white hover:bg-[#214c2c]">
                        <Send size={14} />
                        Send response
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Upcoming bookings */}
            <section className="mt-6 rounded-xl border bg-white shadow-sm">
              <div className="flex items-center justify-between border-b p-5">
                <div>
                  <h2 className="font-semibold">Upcoming Reservations</h2>

                  <p className="mt-1 text-xs text-gray-500">
                    Keep track of your next guests.
                  </p>
                </div>

                <button className="text-xs font-medium text-[#285d35]">
                  View calendar
                </button>
              </div>

              <div className="divide-y">
                {bookings.map((booking) => (
                  <div
                    key={booking.guest}
                    className="flex items-center justify-between p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef5ef]">
                        <User size={18} className="text-[#285d35]" />
                      </div>

                      <div>
                        <p className="text-sm font-medium">{booking.guest}</p>

                        <p className="mt-1 text-xs text-gray-500">
                          {booking.dates} · {booking.guests} guests
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          booking.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {booking.status}
                      </span>

                      <button className="rounded-lg p-2 hover:bg-gray-50">
                        <MoreHorizontal size={17} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function NavItem({
  icon: Icon,
  label,
  active = false,
  badge,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: string;
}) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm ${
        active
          ? "bg-[#eaf3eb] font-medium text-[#285d35]"
          : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <Icon size={18} />

      <span className="flex-1 text-left">{label}</span>

      {badge && (
        <span className="rounded-full bg-[#285d35] px-2 py-0.5 text-[10px] text-white">
          {badge}
        </span>
      )}
    </button>
  );
}

function StatusCard({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eaf3eb] text-[#285d35]">
          <Icon size={19} />
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-500">{label}</p>

      <p className="mt-1 text-xl font-semibold">{value}</p>

      <p className="mt-1 text-xs text-gray-400">{detail}</p>
    </div>
  );
}
