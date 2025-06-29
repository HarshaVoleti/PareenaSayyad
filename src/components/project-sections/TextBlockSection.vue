<template>
  <section class="text-block-section" :class="{ 
    'context-section': section.title === 'Context',
    'problem-statement-section': section.title === 'Problem Statement',
    'project-goal-section': section.title === 'Project Goal',
    'user-research-section': section.title === 'User Research',
    'brainstorming-section': section.title === 'Brainstorming / Ideation',
    'possible-solution-section': section.title === 'Possible Solution',
    'conclusion-section': section.title === 'Conclusion'
  }">
    <div class="container">
      <div class="section-header">
        <h2 v-if="section.title" class="section-title">{{ section.title }}</h2>
        <div v-if="section.title === 'Context'" class="curved-arrow">
          <img src="@/assets/svgs/arrow.svg" alt="Arrow" class="arrow-image" />
        </div>
      </div>
      
      <!-- Special layout for Brainstorming / Ideation -->
      <div v-if="section.title === 'Brainstorming / Ideation'" class="brainstorming-layout">
        <div class="approach-section">
          <h3 class="approach-title">My Approach</h3>
          <div class="approach-arrow">
            <img src="@/assets/svgs/arrow.svg" alt="Arrow" class="arrow-image" />
          </div>
        </div>
        <div class="brainstorming-content" v-html="formatContent(section.content)"></div>
      </div>
      
      <!-- Regular content for other sections -->
      <div v-else class="content" v-html="formatContent(section.content)"></div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  section: {
    type: Object,
    required: true
  }
})

const formatContent = (content) => {
  if (!content) return ''
  
  const lines = content.split('\n').map(line => line.trim()).filter(line => line !== '')
  
  // Check if all content is bullet points
  const allBullets = lines.every(line => line.startsWith('+'))
  
  if (allBullets && lines.length > 0) {
    // Handle case where entire content is bullet points
    const listItems = lines.map(item => `<li>${item.replace(/^\+\s*/, '')}</li>`).join('')
    return `<ul>${listItems}</ul>`
  }
  
  // Convert line breaks to paragraphs and handle mixed bullet points
  return lines
    .map((line, index, arr) => {
      // Handle bullet points
      if (line.startsWith('+')) {
        // Check if this is the first bullet point in a sequence
        const prevLine = index > 0 ? arr[index - 1] : ''
        const isFirstBullet = !prevLine.startsWith('+')
        
        // If this is the first bullet after a text line, start a list
        if (isFirstBullet) {
          const listItems = arr.slice(index)
            .filter(l => l.startsWith('+'))
            .map(item => `<li>${item.replace(/^\+\s*/, '')}</li>`)
            .join('')
          return `<ul>${listItems}</ul>`
        }
        
        // Skip individual bullet processing since we handle them in the first bullet
        return ''
      }
      
      // Handle regular paragraphs
      return `<p>${line}</p>`
    })
    .filter(item => item !== '')
    .join('')
}
</script>

<style scoped>
.text-block-section {
  margin-bottom: 3rem;
  padding: 0;
  background: transparent;
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Context section takes up more width by removing container padding */
.context-section .container {
  padding: 0;
}

/* Problem Statement section takes up more width by removing container padding */
.problem-statement-section .container {
  padding: 0;
}

/* Project Goal section takes up more width by removing container padding */
.project-goal-section .container {
  padding: 0;
}

/* User Research section takes up more width by removing container padding */
.user-research-section .container {
  padding: 0;
}

/* Brainstorming section takes up more width by removing container padding */
.brainstorming-section .container {
  padding: 0;
}

/* Possible Solution section takes up more width by removing container padding */
.possible-solution-section .container {
  padding: 0;
}

/* Conclusion section takes up more width by removing container padding */
.conclusion-section .container {
  padding: 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
}

.section-title {
  font-family: 'Handlee';
  font-size: 32px;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
  text-align: left;
  position: relative;
  display: inline-block;
}

.section-title::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  background: rgba(255, 201, 240, 1);
  transform: translateY(-50%) rotate(-1deg);
  z-index: -1;
  border-radius: 2px;
}

/* Remove highlight for Possible Solution section */
.possible-solution-section .section-title::before {
  display: none;
}

.curved-arrow {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.arrow-image {
  width: 80px;
  height: 100px;
  transform: rotate(270deg);
}

.content {
  line-height: 1.7;
  color: #4b5563;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  margin-top: 1rem;
}

/* Context section specific content styling */
.context-section .content {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0%;
}

/* Project Goal section specific content styling - same as Context */
.project-goal-section .content {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0%;
}

/* User Research section specific content styling - same as Context */
.user-research-section .content {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0%;
}

/* User Research section - star bullet points */
.user-research-section .content :deep(li::before) {
  content: '✦';
  position: absolute;
  left: 0;
  color: #000;
  font-weight: bold;
  font-size: 1.2em;
}

/* Possible Solution section specific content styling */
.possible-solution-section .content {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0%;
}

/* Possible Solution section - star bullet points */
.possible-solution-section .content :deep(ul) {
  margin: 1rem 0;
  padding-left: 0;
  list-style: none;
}

.possible-solution-section .content :deep(li) {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  color: #4b5563;
}

.possible-solution-section .content :deep(li::before) {
  content: '✦' !important;
  position: absolute;
  left: 0;
  color: #000 !important;
  font-weight: bold;
  font-size: 1.2em;
}

/* Conclusion section specific content styling */
.conclusion-section .content {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0%;
}

/* Conclusion section - star bullet points */
.conclusion-section .content :deep(ul) {
  margin: 1rem 0;
  padding-left: 0;
  list-style: none;
}

.conclusion-section .content :deep(li) {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  color: #4b5563;
}

.conclusion-section .content :deep(li::before) {
  content: '✦' !important;
  position: absolute;
  left: 0;
  color: #000 !important;
  font-weight: bold;
  font-size: 1.2em;
}

/* Brainstorming section - special layout */
.brainstorming-layout {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 1.5rem;
}

.approach-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  margin-top: 3rem;
}

.approach-title {
  font-family: 'Handlee', cursive;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #000;
  margin: 2rem 0 1rem 0;
}

.approach-arrow {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.approach-arrow .arrow-image {
  width: 80px;
  height: 60px;
  transform: scaleX(-1);
}

.brainstorming-content {
  flex: 1;
  background: #fef3c7;
  border: 2px solid #d97706;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0%;
  color: #000000;
}

.brainstorming-content :deep(p) {
  margin-bottom: 1.2rem;
  color: #000000;
}

/* Problem Statement section - Yellow sticky note styling */
.problem-statement-section .content {
  background: #fef3c7;
  border: 2px solid #d97706;
  border-radius: 8px;
  padding: 2rem;
  margin-top: 1.5rem;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0%;
  color: #000000;
}

/* Problem Statement content elements */
.problem-statement-section .content :deep(p) {
  margin-bottom: 1.2rem;
  color: #000000;
}

.problem-statement-section .content :deep(ul) {
  margin: 1rem 0;
  padding-left: 0;
  list-style: none;
}

.problem-statement-section .content :deep(li) {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  color: #000000;
}

.problem-statement-section .content :deep(li::before) {
  content: '•';
  position: absolute;
  left: 0;
  color: #d97706;
  font-weight: bold;
}

.content :deep(p) {
  margin-bottom: 1.2rem;
}

.content :deep(ul) {
  margin: 1rem 0;
  padding-left: 0;
  list-style: none;
}

.content :deep(li) {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
}

.content :deep(li::before) {
  content: '•';
  position: absolute;
  left: 0;
  color: #ff69b4;
  font-weight: bold;
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .curved-arrow {
    align-self: flex-start;
    margin-left: 20px;
  }
  
  .arrow-image {
    width: 60px;
    height: 45px;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
  
  .content {
    font-size: 0.95rem;
  }
  
  /* Context section responsive content styling */
  .context-section .content {
    font-size: 20px;
  }
  
  /* Project Goal section responsive content styling */
  .project-goal-section .content {
    font-size: 20px;
  }
  
  /* User Research section responsive content styling */
  .user-research-section .content {
    font-size: 20px;
  }
  
  /* Possible Solution section responsive content styling */
  .possible-solution-section .content {
    font-size: 20px;
  }
  
  /* Conclusion section responsive content styling */
  .conclusion-section .content {
    font-size: 20px;
  }
  
  /* Brainstorming section responsive styling */
  .brainstorming-layout {
    flex-direction: column;
    gap: 1rem;
  }
  
  .approach-title {
    font-size: 24px;
  }
  
  .approach-arrow .arrow-image {
    width: 60px;
    height: 45px;
  }
  
  .brainstorming-content {
    padding: 1.5rem;
    font-size: 20px;
  }
  
  /* Problem Statement responsive styling */
  .problem-statement-section .content {
    padding: 1.5rem;
    margin-top: 1rem;
  }
  
  /* Ensure context section still has no padding on mobile */
  .context-section .container {
    padding: 0 1rem;
  }
  
  /* Ensure problem statement section still has no padding on mobile */
  .problem-statement-section .container {
    padding: 0 1rem;
  }
  
  /* Ensure project goal section still has no padding on mobile */
  .project-goal-section .container {
    padding: 0 1rem;
  }
  
  /* Ensure user research section still has no padding on mobile */
  .user-research-section .container {
    padding: 0 1rem;
  }
  
  /* Ensure brainstorming section still has no padding on mobile */
  .brainstorming-section .container {
    padding: 0 1rem;
  }
  
  /* Ensure possible solution section still has no padding on mobile */
  .possible-solution-section .container {
    padding: 0 1rem;
  }
  
  /* Ensure conclusion section still has no padding on mobile */
  .conclusion-section .container {
    padding: 0 1rem;
  }
}
</style>
