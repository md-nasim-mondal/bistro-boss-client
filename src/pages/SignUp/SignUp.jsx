import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider"
import { Link } from "react-router-dom"

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { createUser } = useContext(AuthContext)
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result?.user
      console.log(loggedUser)
    })
  }
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign Up</title>
      </Helmet>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Sign Up now!</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  name='name'
                  {...register("name", { required: true })}
                  placeholder='Your Name'
                  className='input input-bordered'
                  required
                />
                {errors.name && (
                  <span className='text-red-600'>Name is required</span>
                )}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  name='email'
                  {...register("email", { required: true })}
                  placeholder='email'
                  className='input input-bordered'
                  required
                />
                {errors.email && (
                  <span className='text-red-600'>Email is required</span>
                )}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  name='password'
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder='password'
                  className='input input-bordered'
                  required
                />
                {errors.password?.type === "required" && (
                  <p className='text-red-600'>Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className='text-red-600'>Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className='text-red-600'>
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className='text-red-600'>
                    Password must have one lowerCase, one upperCase, one number
                    and one special character
                  </p>
                )}
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='form-control mt-6'>
                <input
                  className='btn btn-primary'
                  type='submit'
                  value='Sign Up'
                />
              </div>
              <p>
                <small>
                  Already have an account? <Link to='/login'>login</Link>{" "}
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
