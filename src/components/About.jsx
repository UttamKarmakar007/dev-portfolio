import { useState } from 'react';
import Reveal from './Reveal.jsx';

export default function About({ data }) {
  const points = data.points || [];

  const featuredPoint = points[0];

  const slidingPoints = points.slice(1);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((currentIndex) => {
      return (
        currentIndex + 1
      ) % slidingPoints.length;
    });
  };

  const handlePrevious = () => {
    setActiveIndex((currentIndex) => {
      return (
        currentIndex - 1 +
        slidingPoints.length
      ) % slidingPoints.length;
    });
  };

  return (
    <Reveal
      as="section"
      id="about"
      className="portfolio-section about-section"
    >
      <div className="container">

        <div className="about-grid">

          {/* Left Content */}

          <div className="about-content">

            {data.kicker && (
              <div className="section-kicker">
                // {data.kicker}
              </div>
            )}

            {data.heading && (
              <h2 className="about-title">
                {data.heading}
              </h2>
            )}

            {data.body && (
              <div className="about-copy">

                {data.body.map((paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                ))}

              </div>
            )}

          </div>


          {/* Right Capability Panel */}

          {points.length > 0 && (
            <div className="about-capabilities">

              {/* Panel Header */}

              <div className="about-capabilities__header">

                <div>
                  <span className="about-capabilities__eyebrow">
                    What I work on
                  </span>

                  <h3>
                    Selected capabilities
                  </h3>
                </div>

                {slidingPoints.length > 0 && (
                  <div className="about-capabilities__counter">

                    <span>
                      {String(
                        activeIndex + 2,
                      ).padStart(2, '0')}
                    </span>

                    <span>/</span>

                    <span>
                      {String(
                        points.length,
                      ).padStart(2, '0')}
                    </span>

                  </div>
                )}

              </div>


              {/* Cards */}

              <div className="about-capabilities__cards">

                {/* Fixed first card */}

                {featuredPoint && (
                  <article className="about-capability about-capability--featured">

                    <div className="about-capability__top">

                      <span className="about-capability__number">
                        01
                      </span>

                      <span className="about-capability__dot" />

                    </div>

                    <div className="about-capability__content">

                      <span className="about-capability__label">
                        Core focus
                      </span>

                      <h3>
                        {featuredPoint}
                      </h3>

                    </div>

                  </article>
                )}


                {/* Manual vertical slider */}

                {slidingPoints.length > 0 && (
                  <div className="about-capability-slider">

                    <div className="about-capability-slider__viewport">

                      <div
                        className="about-capability-slider__track"
                        style={{
                          transform:
                            `translateY(-${activeIndex * 100}%)`,
                        }}
                      >

                        {slidingPoints.map(
                          (point, index) => (
                            <div
                              className="about-capability-slider__slide"
                              key={point}
                            >

                              <article className="about-capability">

                                <div className="about-capability__top">

                                  <span className="about-capability__number">
                                    {String(
                                      index + 2,
                                    ).padStart(2, '0')}
                                  </span>

                                </div>

                                <div className="about-capability__content">

                                  <span className="about-capability__label">
                                    Capability
                                  </span>

                                  <h3>
                                    {point}
                                  </h3>

                                </div>

                              </article>

                            </div>
                          ),
                        )}

                      </div>

                    </div>

                  </div>
                )}

              </div>


              {/* Controls */}

              {slidingPoints.length > 1 && (
                <div className="about-capabilities__controls">

                  <button
                    type="button"
                    className="about-control"
                    onClick={handlePrevious}
                    aria-label="Show previous capability"
                  >
                    <span aria-hidden="true">
                      ←
                    </span>

                    Previous
                  </button>

                  <button
                    type="button"
                    className="about-control about-control--next"
                    onClick={handleNext}
                    aria-label="Show next capability"
                  >
                    Next

                    <span aria-hidden="true">
                      →
                    </span>
                  </button>

                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </Reveal>
  );
}