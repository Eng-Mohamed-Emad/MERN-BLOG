import { HiUser, HiArrowSmRight } from "react-icons/hi"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function DashSidebar() {
  const location = useLocation()
  const [tab, setTab] = useState("")

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get("tab")
    if (tabFromUrl) {
      setTab(tabFromUrl)
    }
  }, [location.search])

  return (
    <div className="w-full md:w-56 bg-gray-50 dark:bg-gray-800 h-full">
      <div className="flex flex-col gap-2 p-4">
        <Link to="/dashboard?tab=profile">
          <div
            className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              tab === "profile" ? "bg-gray-100 dark:bg-gray-700" : ""
            }`}
          >
            <HiUser className="w-5 h-5" />
            <span>Profile</span>
            <span className="ml-auto text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
              User
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <HiArrowSmRight className="w-5 h-5" />
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  )
}
