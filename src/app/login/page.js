import Link from 'next/link'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <>
      <div className='container pt-5 text-center'>

        <div className="row align-items-start">
          <div className="col">

            <div className="card">
              <div className="card-header">
                Student Login
              </div>
              <div className="card-body">


                <Image
                  src="/img/student-login.png"
                  width={200}
                  height={200}
                  alt="Student login"
                />

              </div>
              <div className="card-footer"><Link href="/student/login" className='btn btn-primary px-5'>Login</Link></div>
            </div>
          </div>




          <div className="col">
          
          <div className="card">
              <div className="card-header">
                Faculty Login
              </div>
              <div className="card-body">


                <Image
                  src="/img/faculty-login.png"
                  width={200}
                  height={200}
                  alt="Faculty login"
                />

              </div>
              <div className="card-footer"><Link href="/faculty/login" className='btn btn-primary px-5'>Login</Link></div>
            </div>

          </div>


          {/* <div className="col">
            
            
          <div className="card">
              <div className="card-header">
                Admin Login
              </div>
              <div className="card-body">


                <Image
                  src="/img/admin-login.png"
                  width={200}
                  height={200}
                  alt="Admin login"
                />

              </div>
              <div className="card-footer"><Link href="admin/login" className='btn btn-primary px-5'>Login</Link></div>
            </div>


          </div> */}






        </div>



      </div>

    </>
  )
}

export default LoginPage