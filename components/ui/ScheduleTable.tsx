import scheduleData from '@/data/schedule.json'

export default function ScheduleTable() {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-off-white text-navy font-semibold border-b border-gray-200">
          <tr>
            <th className="px-6 py-4 text-xs uppercase tracking-wider">Route</th>
            <th className="px-6 py-4 text-xs uppercase tracking-wider">Departure</th>
            <th className="px-6 py-4 text-xs uppercase tracking-wider">Arrival</th>
            <th className="px-6 py-4 text-xs uppercase tracking-wider">Spaces</th>
            <th className="px-6 py-4 text-xs uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {scheduleData.map((s) => (
            <tr key={s.id} className="hover:bg-off-white/50 transition-colors">
              <td className="px-6 py-4 font-medium text-navy">{s.route}</td>
              <td className="px-6 py-4 text-gray-600">{s.departureDate}</td>
              <td className="px-6 py-4 text-gray-600">{s.arrivalDate}</td>
              <td className="px-6 py-4 text-gray-600">{s.availableSpaces}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  s.status === 'Open'
                    ? 'bg-green-100 text-green-800'
                    : s.status === 'Full'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {s.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
