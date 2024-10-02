#import <UgoiraViewManager.h>
#import <UgoiraView.h>

@interface YourProjectName : NSObject

@property (nonatomic, strong) UgoiraViewManager *viewManager;
@property (nonatomic, strong) UgoiraView *ugoiraView;

- (void)setPaused:(BOOL)paused;

@end

@implementation YourProjectName

- (instancetype)init {
    self = [super init];
    if (self) {
        _viewManager = [[UgoiraViewManager alloc] init];
        _ugoiraView = [[UgoiraView alloc] init];
    }
    return self;
}

- (void)setPaused:(BOOL)paused {
    @try {
        if (paused) {
            [self.ugoiraView pauseAnimation];
        } else {
            [self.ugoiraView resumeAnimation];
        }
        [UIView transitionWithView:self.ugoiraView
                          duration:0.3
                           options:UIViewAnimationOptionTransitionCrossDissolve
                        animations:^{
                            self.ugoiraView.alpha = paused ? 0.5 : 1.0;
                        }
                        completion:^(BOOL finished) {
                            if (!finished) {
                                NSLog(@"Animation transition was interrupted.");
                            }
                        }];
    } @catch (NSException *exception) {
        NSLog(@"Error during pause/resume: %@", exception.reason);
        // Additional error handling can be implemented here
    }
}

@end