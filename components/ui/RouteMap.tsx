"use client"
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect } from 'react'

export default function RouteMap() {
  useEffect(() => {
    // Fix default icons for Leaflet in Next.js
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, [])

  const routes = [
    { from: [44.4268, 26.1025], to: [51.5074, -0.1278], name: 'Bucharest to London' },
    { from: [52.2297, 21.0122], to: [51.5074, -0.1278], name: 'Warsaw to London' },
    { from: [42.6977, 23.3219], to: [51.5074, -0.1278], name: 'Sofia to London' }
  ]

  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden border border-navy-border">
      <MapContainer center={[50, 15]} zoom={5} className="h-full w-full bg-navy">
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {routes.map((route, i) => (
          <div key={i}>
            <Polyline positions={[route.from as [number, number], route.to as [number, number]]} color="#C9A84C" weight={3} opacity={0.7} />
            <Marker position={route.from as [number, number]}>
              <Popup>{route.name} Origin</Popup>
            </Marker>
          </div>
        ))}
        <Marker position={[51.5074, -0.1278]}>
          <Popup>London (Destination)</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
