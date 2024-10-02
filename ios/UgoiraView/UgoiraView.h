package UgoiraView;

#import <UIKit/UIKit.h>

@interface UgoiraView : UIView

@property (nonatomic, assign) BOOL paused;

- (void)setPaused:(BOOL)paused;
- (void)resumeAnimation;
- (void)pauseAnimation;

@end

@implementation UgoiraView

- (void)setPaused:(BOOL)paused {
    if (_paused != paused) {
        _paused = paused;
        if (paused) {
            [self pauseAnimation];
        } else {
            [self resumeAnimation];
        }
    }
}

- (void)resumeAnimation {
    if (!self.paused) {
        return;
    }
    @try {
        [UIView animateWithDuration:0.3 animations:^{
            // Code to resume animation smoothly
            // Example: self.layer.speed = 1.0;
        }];
    } @catch (NSException *exception) {
        NSLog(@"Error resuming animation: %@", exception.reason);
    }
}

- (void)pauseAnimation {
    if (self.paused) {
        return;
    }
    @try {
        [UIView animateWithDuration:0.3 animations:^{
            // Code to pause animation smoothly
            // Example: self.layer.speed = 0.0;
        }];
    } @catch (NSException *exception) {
        NSLog(@"Error pausing animation: %@", exception.reason);
    }
}

@end