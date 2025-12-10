import React from 'react';

/**
 * Handles smooth scrolling to a section ID.
 * Prevents the default anchor behavior (adding # to URL).
 */
export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
  e.preventDefault();
  
  const element = document.getElementById(id);
  if (element) {
    // Scroll to the element smoothly
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    console.warn(`Element with id '${id}' not found.`);
  }
};