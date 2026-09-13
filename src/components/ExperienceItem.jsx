export default function ExperienceItem({
  experience,
}) {
  return (
    <article className="experience-card">

      <div className="experience-card__company">

        <div>
          <a
            className="experience-card__company-name"
            href={experience.companyUrl}
            target="_blank"
            rel="noreferrer"
          >
            {experience.company}
            <span aria-hidden="true">
              ↗
            </span>
          </a>

          <div className="experience-card__meta">

            {experience.totalDuration && (
              <span>
                {experience.totalDuration}
              </span>
            )}

            {experience.location && (
              <span>
                {experience.location}
              </span>
            )}

            {experience.workMode && (
              <span>
                {experience.workMode}
              </span>
            )}

          </div>
        </div>

      </div>

      <div className="experience-timeline">

        {experience.roles.map((role) => (
          <div
            className={`experience-role${
              role.current
                ? ' experience-role--current'
                : ''
            }`}
            key={`${role.title}-${role.startDate}`}
          >

            <div
              className="experience-role__marker"
              aria-hidden="true"
            >
              <span></span>
            </div>

            <div className="experience-role__content">

              <div className="experience-role__header">

                <div>
                  <h3>
                    {role.title}
                  </h3>

                  {role.employmentType && (
                    <div className="experience-role__type">
                      {role.employmentType}
                    </div>
                  )}
                </div>

                <div className="experience-role__date">
                  {role.startDate}
                  {' — '}
                  {role.endDate}
                </div>

              </div>

              {role.description && (
                <p className="experience-role__description">
                  {role.description}
                </p>
              )}

            </div>

          </div>
        ))}

      </div>

    </article>
  );
}