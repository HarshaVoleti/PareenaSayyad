<script setup>
// Work Experience section component
</script>

<template>
  <section class="work-experience-section">
    <div class="content-layout">
      <div class="left-side">
        <div class="section-header">
          <h2 class="section-title">
            <span class="highlight-full">Work Experience</span>
          </h2>
        </div>

        <!-- Curved Arrow pointing to experience items -->
        <div class="curved-arrow">
          <img src="@/assets/svgs/arrow.svg" alt="Arrow" class="arrow-image" />
        </div>

        <div class="section-description">
          <p class="section-text">
            Applying product thinking in a real-world setting.
          </p>
        </div>
      </div>

      <div class="right-side">
        <!-- Single frame containing all experience items -->
        <div class="experience-frame">
        <div class="frame-lines">
          <!-- Top horizontal line -->
          <div class="frame-line horizontal top"></div>
          <!-- Bottom horizontal line -->
          <div class="frame-line horizontal bottom"></div>
          <!-- Left vertical line -->
          <div class="frame-line vertical left"></div>
          <!-- Right vertical line -->
          <div class="frame-line vertical right"></div>
        </div>
          <div class="experience-item">
            <div class="experience-number yellow">1</div>
            <div class="experience-content">
              <h3 class="position-title">Product Analyst at <strong>DeltaX</strong></h3>
              <p class="experience-description">
                Working on end-to-end product design for mobile and web - from wireframes to dev handoff in Figma.
              </p>
              <span class="duration">24 June 2024 - Present</span>
            </div>
          </div>

          <div class="experience-item">
            <div class="experience-number blue">2</div>
            <div class="experience-content">
              <h3 class="position-title">Creative Head at <strong>Ritva MH</strong> (Intern)</h3>
              <p class="experience-description">
                Designed visual content and led creative for women's health initiatives.
              </p>
              <span class="duration">September 2023 - June 2024</span>
            </div>
          </div>

          <div class="experience-item">
            <div class="experience-number pink">3</div>
            <div class="experience-content">
              <h3 class="position-title">Graphic Designer at <strong>CompuAda MH</strong> (Intern)</h3>
              <p class="experience-description">
                Created digital designs for events and webinars. Focused on user-friendly promotional material.
              </p>
              <span class="duration">August 2023 - June 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Work Experience Section */
.work-experience-section {
  padding: 4rem 0;
  margin-top: 2rem;
}

.content-layout {
  display: flex;
  align-items: flex-start;
  gap: 4rem;
  width: 100%;
  padding: 0 2rem;
}

.left-side {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.right-side {
  flex: 1;
  display: flex;
  justify-content: center;
}

.section-header {
  text-align: left;
  margin-top: 6rem;
  margin-left: 60px;
}

.section-title {
  font-family: 'Handlee', cursive;
  font-size: 3rem;
  font-weight: bold;
  color: #000000;
  margin: 0;
}

.highlight-full {
  position: relative;
  display: inline-block;
  font-family: 'Handlee', cursive;
  font-size: 3rem;
  font-weight: bold;
}

.highlight-full::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 80%;
  background: rgba(255, 201, 240, 1);
  transform: translateY(-50%) rotate(-1deg);
  z-index: -1;
  border-radius: 2px;
}

.curved-arrow {
  display: flex;
  justify-content: flex-start;
  margin-left: 100px;
  margin-top: 2rem;
  position: relative;
}

.arrow-image {
  width: 80px;
  height: 60px;
  transform: rotate(240deg); /* Placeholder angle - adjust as needed */
}

.section-description {
  margin-left: 60px;
  margin-top: 2rem;
  max-width: 300px;
}

.section-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0%;
  color: #555;
  margin: 0;
}

.experience-frame {
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  margin: 40px;
}

/* Frame lines container */
.frame-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

/* Horizontal lines that extend past the frame */
.frame-line.horizontal {
  position: absolute;
  height: 3px;
  background: #000;
  left: -55px;
  right: -55px;
  z-index: 2;
}

.frame-line.horizontal.top {
  top: 10px;
}

.frame-line.horizontal.bottom {
  bottom: 10px;
}

/* Vertical lines that extend past the frame */
.frame-line.vertical {
  position: absolute;
  width: 3px;
  background: #000;
  top: -40px;
  bottom: -40px;
  z-index: 1;
}

.frame-line.vertical.left {
  left: -1.5px;
}

.frame-line.vertical.right {
  right: -1.5px;
}

.experience-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 0;
  border: none;
  background: none;
}

.experience-number {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Handlee', cursive;
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  flex-shrink: 0;
}

.experience-number.yellow {
  background: #f5d616;
}

.experience-number.blue {
  background: #4a90e2;
  color: #fff;
}

.experience-number.pink {
  background: #ff69b4;
  color: #fff;
}

.experience-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.position-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: #000;
  margin: 0;
  line-height: 1.4;
}

.position-title strong {
  font-weight: 700;
}

.experience-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: #555;
  margin: 0;
}

.duration {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  color: #888;
  margin-top: 0.5rem;
}

/* Responsive Design */
@media (max-width: 968px) {
  .content-layout {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  
  .curved-arrow {
    display: none;
  }
  
  .section-header {
    margin-left: 0;
    text-align: center;
  }
  
  .section-description {
    margin-left: 0;
    text-align: center;
    max-width: 100%;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .experience-frame {
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .work-experience-section {
    padding: 2rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .experience-frame {
    padding: 1.5rem;
  }
  
  .experience-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .experience-number {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
  
  .position-title {
    font-size: 1.1rem;
  }
}
</style>
