import React from 'react';
import useLegoTitle from '../../hooks/useLegoTitle';

const Blogs = () => {
    useLegoTitle('Blogs')

    return (
        <div className="container mx-auto text-justify my-4 space-y-4">
            <div className=''>

                <h2 className='text-2xl font-semibold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h2>
                <p className='text-xl'>I may use refresh tokens to strike a balance between my users' access requirements and my company's security procedures. Access tokens assist users in gaining access to the resources they require to fulfill their duties, but if a hacker manages to acquire them, they might also expose my business to a data breach or other nefarious deeds.
                    I can Store it in local browser storage Store it in a cookie in client side, it can be safer than local browser storage. Don't store the token but store username and password in the browser or client-side cookie, and then retrieve a new token by sending credentials silently.</p>
            </div>
            <div className=''>

                <h2 className='text-2xl font-semibold'>Compare SQL and NoSQL databases? </h2>
                <p className='text-xl'>SQL databases contain a specified schema and a structured query language. For unstructured data, NoSQL databases employ dynamic schemas. In contrast to SQL databases, noSQL databases scale vertically. In contrast to NoSQL databases, which are document, key-value, graph, or wide-column stores, SQL databases are table-based. </p>
            </div>
            
            <div className=''>

                <h2 className='text-2xl font-semibold'>What is express js? What is Nest JS? </h2>
                <p className='text-xl'>The most well-liked Node.js web framework is Express.js. It has been referred to as the de facto standard server framework for Node.js and is intended for the development of online applications and APIs. Node.js backend development from scratch may be laborious and time-consuming. Writing all the boilerplate code, such as port configuration and route handlers, detracts from the task at hand, which is creating the business logic for an application. Web frameworks like Express.js allow developers to focus on other crucial activities while saving time. <br /> One of the Node.js frameworks that is expanding the fastest for creating effective, scalable, and enterprise-grade backend applications is Nest. Using contemporary JavaScript and TypeScript, it is renowned for creating highly tested, maintainable, and scalable applications.</p>
            </div>
            <div className=''>

                <h2 className='text-2xl font-semibold'>What is MongoDB aggregate and how does it work? </h2>
                <p className='text-xl'>
                Aggregation is the process of going through many phases with a huge collection of documents to process them. A pipeline is made up of several phases. Filtering, sorting, grouping, restructuring, and altering documents as they go through a pipeline are all possible.
                </p>
            </div>
            
        </div>
    );
};

export default Blogs;