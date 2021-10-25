import React,{useEffect,useRef,useState} from 'react'

export default function DetectBottom(ref) {
    const [isIntersecting, setIntersecting] = useState(false)
 
    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    )

    useEffect(() => {
        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [])
    
    return isIntersecting
}
