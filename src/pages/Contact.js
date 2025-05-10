import React from 'react';
import Contact from '../components/Contact/Contact.js'
import ContactForm from '../components/Contact/ContactForm.js'


const ContactF = () => {
  return (
    <div>
        <Contact/>
        <ContactForm/>

    </div>
  );
};

export default ContactF;


// import React, { Suspense } from 'react';

// // Lazy load components
// const LazyContact = React.lazy(() => import('../components/Contact/Contact.js'));
// const LazyContactForm = React.lazy(() => import('../components/Contact/ContactForm.js'));

// const Contact = () => {
//   return (
//     <div>
//       {/* Suspense component to show fallback while components are loading */}
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyContact />
//         <LazyContactForm />
//       </Suspense>
//     </div>
//   );
// };

// export default Contact;

