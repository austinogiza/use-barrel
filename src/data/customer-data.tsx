interface CustomerDataProps {
  name?: string
  photo?: string
  email?: string
  amount?: number
  duration?: "annually" | "monthly" | "one time"
  paidDate?: string // Add a new property for the paid date
}

function generateAvatarUrl(name: string): string {
  const hash = btoa(name).substr(0, 20) // Create a hash from the name
  return `https://i.pravatar.cc/150?u=${hash}`
}

// Helper function to generate a random amount between min and max
function generateRandomAmount(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Helper function to randomly select a duration
function generateRandomDuration(): "annually" | "monthly" | "one time" {
  const durations: ("annually" | "monthly" | "one time")[] = [
    "annually",
    "monthly",
    "one time",
  ]
  return durations[Math.floor(Math.random() * durations.length)]
}

// Helper function to generate a random date within the last year
function generateRandomDate(): string {
  const start = new Date()
  start.setFullYear(start.getFullYear() - 1) // Set the start date to one year ago
  const end = new Date()
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
  return date.toISOString().split("T")[0] // Return the date in YYYY-MM-DD format
}

// Updating the customer data array
export const CustomerData: CustomerDataProps[] = [
  {
    name: "John Doe",
    photo: generateAvatarUrl("John Doe"),
    email: "john.doe@example.com",
    amount: generateRandomAmount(100, 1000),
    duration: generateRandomDuration(),
    paidDate: generateRandomDate(),
  },
  {
    name: "Jane Doe",
    photo: generateAvatarUrl("Jane Doe"),
    email: "jane.doe@example.com",
    amount: generateRandomAmount(100, 1000),
    duration: generateRandomDuration(),
    paidDate: generateRandomDate(),
  },
  {
    name: "Robert Doe",
    photo: generateAvatarUrl("Robert Doe"),
    email: "robert.doe@example.com",
    amount: generateRandomAmount(100, 1000),
    duration: generateRandomDuration(),
    paidDate: generateRandomDate(),
  },
  {
    name: "Mark Doe",
    photo: generateAvatarUrl("Mark Doe"),
    email: "mark.doe@example.com",
    amount: generateRandomAmount(100, 1000),
    duration: generateRandomDuration(),
    paidDate: generateRandomDate(),
  },
  {
    name: "Frank Doe",
    photo: generateAvatarUrl("Frank Doe"),
    email: "frank.doe@example.com",
    amount: generateRandomAmount(100, 1000),
    duration: generateRandomDuration(),
    paidDate: generateRandomDate(),
  },
  {
    name: "Zoe Doe",
    photo: generateAvatarUrl("Zoe Doe"),
    email: "zoe.doe@example.com",
    amount: generateRandomAmount(100, 1000),
    duration: generateRandomDuration(),
    paidDate: generateRandomDate(),
  },
  {
    name: "Bob Doe",
    photo: generateAvatarUrl("Bob Doe"),
    email: "bob.doe@example.com",
    amount: generateRandomAmount(100, 1000),
    duration: generateRandomDuration(),
    paidDate: generateRandomDate(),
  },
  {
    name: "Francis Doe",
    photo: generateAvatarUrl("Francis Doe"),
    email: "francis.doe@example.com",
    amount: generateRandomAmount(100, 1000),
    duration: generateRandomDuration(),
    paidDate: generateRandomDate(),
  },
  {
    name: "Milan Doe",
    photo: generateAvatarUrl("Milan Doe"),
    email: "milan.doe@example.com",
    amount: generateRandomAmount(100, 1000),
    duration: generateRandomDuration(),
    paidDate: generateRandomDate(),
  },
  {
    name: "Isabella Doe",
    photo: generateAvatarUrl("Isabella Doe"),
    email: "isabella.doe@example.com",
    amount: generateRandomAmount(100, 1000),
    duration: generateRandomDuration(),
    paidDate: generateRandomDate(),
  },
]
