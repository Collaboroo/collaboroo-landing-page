import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Engage your customers with one click',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <br />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div style={{ marginBottom: "16px" }}>
                  <Image
                    src={require('./../../assets/images/collaboroo/icon_recruit.svg')}
                    alt="Features tile icon 01"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Recruit
                  </h4>
                  <p className="m-0 text-sm">
                    Innovative web scraping technologies to recruit the right respondents faster.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div style={{ marginBottom: "16px" }}>
                  <Image
                    src={require('./../../assets/images/collaboroo/icon_feedback.svg')}
                    alt="Features tile icon 02"
                    width={64}
                    height={64} />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Screen
                  </h4>
                  <p className="m-0 text-sm">
                    Distractor questions and other behavioural science methodologies to double check the quality of our participants
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div style={{ marginBottom: "16px" }}>
                  <Image
                    src={require('./../../assets/images/collaboroo/icon_time.svg')}
                    alt="Features tile icon 03"
                    width={64}
                    height={64} />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Schedule
                  </h4>
                  <p className="m-0 text-sm">
                    Scheduling the right time with respondents can be a big pain. Calender integration to make scheduling hassle free!
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div style={{ marginBottom: "16px" }}>
                  <Image
                    src={require('./../../assets/images/collaboroo/icon_reviews.svg')}
                    alt="Features tile icon 03"
                    width={64}
                    height={64} />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Reviews
                  </h4>
                  <p className="m-0 text-sm">
                    Reviews from our interviewers to assess the quality of respondents and improve our recruitment process.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div style={{ marginBottom: "16px" }}>
                  <Image
                    src={require('./../../assets/images/collaboroo/icon_reward.svg')}
                    alt="Features tile icon 03"
                    width={64}
                    height={64} />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Token of Appreciation
                  </h4>
                  <p className="m-0 text-sm">
                   We reward our respondents while ensuring quality so you don't have to worry about your budget.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <br />
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;