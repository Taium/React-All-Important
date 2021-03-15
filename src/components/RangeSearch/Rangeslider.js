import React from 'react';
import {
    RangeSlider

} from '';
const Rangeslider = () => {
    return (
        <div>
            <RangeSlider
                componentId="RangeSliderSensor"
                dataField="guests"
                title="Guests"
                range={{
                    "start": 0,
                    "end": 10
                }}
            />
            <Rangeslider
  step={2}
  onChange={this.onChange}
  wrapperClassName={styles.slider}
  highlightedTrackClassName={styles.sliderHighlightedTrack}
  trackClassName={styles.sliderTrack}
  handleClassName={styles.sliderHandle}
/>
        </div>
    );
};

export default Rangeslider;