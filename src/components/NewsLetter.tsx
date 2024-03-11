import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const NewsLetter = () => {
    return (
        <div className="relative text-center space-y-4 lg:py-12 flex flex-col justify-center items-center text-gray-800">
        <h6 className="absolute text-6xl md:text-[9rem] font-bold text-gray-200 text-center mx-auto -z-50 ">Newsletter</h6>
        <h6 className="text-3xl md:text-4xl font-bold">Subscribe Our Newsletter</h6>
                    <p className="mt-4 text-lg leading-8">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    </p>
                    <div className="mt-6 flex max-w-md gap-x-4">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <Input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-none sm:text-sm sm:leading-6"
                            placeholder="Enter your email"
                        />
                        <Button
                            type="submit"
                            className="flex-none rounded-none bg-black">
                            Subscribe
                        </Button>
                    </div>
                </div>
    )
}

export default NewsLetter
