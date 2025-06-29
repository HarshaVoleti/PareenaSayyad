<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projectDetailsList } from '@/data/projects.js'

// Components for different section types
import TextBlockSection from '@/components/project-sections/TextBlockSection.vue'
import PersonasSection from '@/components/project-sections/PersonasSection.vue'
import MobileScreensSection from '@/components/project-sections/MobileScreensSection.vue'
import ImageBlockSection from '@/components/project-sections/ImageBlockSection.vue'
import FeatureListSection from '@/components/project-sections/FeatureListSection.vue'
import WhyUsSection from '@/components/project-sections/WhyUsSection.vue'
import TestimonialCardsSection from '@/components/project-sections/TestimonialCardsSection.vue'
import StatsSection from '@/components/project-sections/StatsSection.vue'

const route = useRoute()
const router = useRouter()

const project = ref(null)
const loading = ref(true)
const error = ref(null)

// Component mapping for different section types
const sectionComponents = {
  'text-block': TextBlockSection,
  'personas': PersonasSection,
  'mobile-screens': MobileScreensSection,
  'image-block': ImageBlockSection,
  'feature-list': FeatureListSection,
  'why-us': WhyUsSection,
  'testimonial-cards': TestimonialCardsSection,
  'stats': StatsSection
}

// Computed properties
const nextProject = computed(() => {
  if (!project.value?.nextProject) return null
  return projectDetailsList.find(p => p.id === project.value.nextProject)
})

const prevProject = computed(() => {
  if (!project.value?.prevProject) return null
  return projectDetailsList.find(p => p.id === project.value.prevProject)
})

// Methods
const loadProject = () => {
  const projectId = route.params.id
  
  const foundProject = projectDetailsList.find(p => p.id === projectId)
  
  if (!projectId || !foundProject) {
    error.value = 'Project not found'
    loading.value = false
    return
  }
  
  project.value = foundProject
  loading.value = false
  
  // Update page title
  document.title = `${project.value.title} - Pareena Sayyad Portfolio`
}

const navigateToProject = (projectId) => {
  router.push(`/projects/${projectId}`)
}

const goBack = () => {
  router.push('/#projects')
}

const getHighlightedTitle = (title) => {
  // Special case for LaundryLoop to highlight "andry"
  if (title.includes('LaundryLoop')) {
    const parts = title.split(':')
    return {
      highlighted: '',
      rest: 'L',
      halfHighlight: 'aundry',
      afterHighlight: `Loop${parts[1] || ''}`
    }
  }
  
  // Default behavior - highlight first part before colon
  const colonIndex = title.indexOf(':')
  if (colonIndex !== -1) {
    return {
      highlighted: title.substring(0, colonIndex),
      rest: title.substring(colonIndex),
      halfHighlight: '',
      afterHighlight: ''
    }
  } else {
    // If no colon, highlight the first word
    const words = title.split(' ')
    return {
      highlighted: words[0],
      rest: words.length > 1 ? ' ' + words.slice(1).join(' ') : '',
      halfHighlight: '',
      afterHighlight: ''
    }
  }
}

// Lifecycle
onMounted(() => {
  loadProject()
})

// Watch route changes
import { watch } from 'vue'
watch(() => route.params.id, () => {
  loadProject()
})
</script>

<template>
  <div class="project-detail">
    <!-- Loading State -->
    <div v-if="loading" class="loading-state">
      <div class="loading-spinner"></div>
      <p>Loading project...</p>
    </div>
    
    <!-- Error State -->
    <div v-else-if="error" class="error-state">
      <h2>{{ error }}</h2>
      <button @click="goBack" class="back-button">← Back to Projects</button>
    </div>
    
    <!-- Project Content -->
    <div v-else class="project-content">
      
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <div class="hero-left">
            <h1 class="project-title">
              <template v-if="getHighlightedTitle(project.title).halfHighlight">
                {{ getHighlightedTitle(project.title).rest }}<span class="highlight">{{ getHighlightedTitle(project.title).halfHighlight }}</span>{{ getHighlightedTitle(project.title).afterHighlight }}
              </template>
              <template v-else>
                <span class="highlight-full">{{ getHighlightedTitle(project.title).highlighted }}</span>{{ getHighlightedTitle(project.title).rest }}
              </template>
            </h1>
          </div>
          
          <div class="hero-right">
            <div class="hero-image">
              <img :src="project.mainImage" :alt="project.title" />
            </div>
          </div>
        </div>
      </section>
      
      <!-- Dynamic Project Sections -->
      <div class="project-sections">
        <component
          v-for="(section, index) in project.sections"
          :key="index"
          :is="sectionComponents[section.type]"
          :section="section"
        />
      </div>
      
      <!-- Project Navigation -->
      <!-- <section class="project-navigation">
        <div class="nav-item prev" v-if="prevProject" @click="navigateToProject(prevProject.id)">
          <span class="nav-direction">← Previous</span>
          <span class="nav-title">{{ prevProject.title }}</span>
        </div>
        
        <div class="nav-item next" v-if="nextProject" @click="navigateToProject(nextProject.id)">
          <span class="nav-direction">Next →</span>
          <span class="nav-title">{{ nextProject.title }}</span>
        </div>
      </section> -->
    </div>
  </div>
</template>

<style scoped>
/* Base Project Styles */
.project-detail {
  min-height: 100vh;
  background: transparent;
  padding: 2rem 0;
}

.project-content {
  margin: 0px 2rem;
  padding: 0px 2rem;
}

/* Loading & Error States */
.loading-state, .error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #ddd;
  border-top: 3px solid #000;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Header */
.project-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
}

.back-button {
  background: none;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  color: #6b7280;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.back-button:hover {
  color: #ff69b4;
}

.project-meta {
  display: flex;
  gap: 2rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #666;
}

/* Hero Section */
.hero-section {
  margin-bottom: 3rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
  min-height: 60vh;
}

.hero-left {
  display: flex;
  align-items: center;
}

.project-title {
  font-family: 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: #1f2937;
  line-height: 1.2;
  margin: 0;
}

.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image {
  width: 100%;
  text-align: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

/* Highlight styles similar to HomeView */
.highlight {
  position: relative;
  display: inline-block;
}

.highlight::before {
  content: '';
  position: absolute;
  top: 75%;
  left: 0;
  width: 100%;
  height: 40%;
  background: rgba(255, 201, 240, 1);
  transform: translateY(-50%) rotate(-1deg);
  z-index: -1;
  border-radius: 2px;
}

.highlight-full {
  position: relative;
  display: inline-block;
}

.highlight-full::before {
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

/* Curved Arrow */
.curved-arrow {
  display: flex;
  justify-content: flex-start;
  margin-left: 100px;
  margin-top: 2rem;
  margin-bottom: 3rem;
  position: relative;
}

.arrow-image {
  width: 80px;
  height: 60px;
  transform: rotate(240deg);
}

/* Overview Section - Removed since not in data structure */

/* Project Sections */
.project-sections {
  margin-bottom: 4rem;
}

/* Project Navigation */
.project-navigation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 4rem;
}

.nav-item {
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.nav-item:hover {
  transform: translateY(-5px);
}

.nav-item.prev {
  text-align: left;
}

.nav-item.next {
  text-align: right;
}

.nav-direction {
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.nav-title {
  display: block;
  font-size: 1.1rem;
  font-weight: 400;
  color: #000;
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-content {
    padding: 0 1rem;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    min-height: auto;
  }
  
  .project-title {
    font-size: 2rem;
  }
  
  .curved-arrow {
    margin-left: 20px;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  
  .arrow-image {
    width: 60px;
    height: 45px;
  }
  
  .project-navigation {
    grid-template-columns: 1fr;
  }
  
  .project-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .metrics-grid {
    grid-template-columns: 1fr;
  }
}
</style>
