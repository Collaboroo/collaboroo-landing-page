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
                    src={require('./../../assets/images/collaboroo/icon_time.svg')}
                    alt="Features tile icon 01"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Save Time
                    </h4>
                  <p className="m-0 text-sm">
                    Engage your customers asynchronously. Spend more time on the work that actually matters
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
                    Qualitative Data
                    </h4>
                  <p className="m-0 text-sm">
                    Open-ended video responses from your customers transcribed for your convenience.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div style={{ marginBottom: "16px" }}>
                  <Image
                    src={require('./../../assets/images/collaboroo/icon_share.svg')}
                    alt="Features tile icon 03"
                    width={64}
                    height={64} />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Share Feedback
                    </h4>
                  <p className="m-0 text-sm">
                    Team-wide access to customer feedback data. No more needing the whole team for every interview
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