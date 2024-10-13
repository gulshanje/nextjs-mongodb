import Link from 'next/link';

export default function TopNav() {
    return (
        <nav className="navbar shadow p-2 justify-content-between mb3">
            <Link href="/" className='nav-link'>
            ⏩ Nextjs-Mongo
            </Link>
            <div className='d-flex'>
                
                <Link href="/login" className='nav-link'>
                    Login
                </Link>
                
                <Link href="/signup" className='nav-link'>
                    Sign Up
                </Link>
                
                <Link href="/logout" className='nav-link'>
                    Logout
                </Link>
            </div>
          
        </nav>
    );
}