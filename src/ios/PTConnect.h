//
//  PTConnect.h
//  PTConnect
//
//  Created by Bart van den Berg on 21-05-15.
//  Copyright (c) 2015 Bart van den Berg. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#define kPTConnectVersionString @"1.1.7"

@protocol PTConnectDelegate <NSObject>
@optional
- (void)didSuccessfullyCreateSession;
- (void)didFailCreateSession:(NSError *_Nonnull)error;
- (void)didPresentFeedbackDialog;
- (void)didDismissFeedbackDialog;
- (void)didReceiveCheckpointAction; // if checkpoint has a payload that wants to present
@end


@class PTFeedbackViewController;
@interface PTConnect : NSObject

typedef NSUInteger PTFeedbackMethod;

enum {
    PTFeedbackShake = 1,
    PTFeedbackThreeFinger = 2,
    PTFeedbackFourFinger = 3,
    PTFeedbackFiveFinger = 4
};

typedef NSUInteger PTLogLevel;

enum {
    PTLogLevelNone = 1,
    PTLogLevelDebug = 2,
    PTLogLevelVerbose = 3
};

typedef NSUInteger PTContentType;
enum {
    PTContentTypeApp = 0, //default
    PTContentTypeGame = 1, //Specifically to capture OpenGL
    PTContentTypeWeb = 2 //For web apps
};

// delegate method for capturing response from playtest (optional)
@property (nonatomic, weak) _Nullable id <PTConnectDelegate> delegate;

// how the SDK should collect screenshots and content
@property (nonatomic,assign) PTContentType contenttype;

// feedback method
@property (nonatomic,assign) PTFeedbackMethod feedbackmethod;

// studio API key (required)
@property (nonatomic, copy) NSString * _Nonnull apiKey;

// feedback ID, which is a GUID (required)
@property (nonatomic, copy) NSString * _Nonnull feedbackID;

// feedback ID, which is a GUID (required)
@property (assign,readwrite) BOOL needsValidation;

// set whether you want the engagement button to be hidden
@property (assign,readwrite) BOOL engagementViewHidden;


// return data once a build has been validated
@property (nonatomic,assign) NSString * _Nullable displayName;
@property (nonatomic,assign) NSString * _Nullable lastName;
@property (nonatomic,assign) NSString * _Nullable firstName;
@property (assign,readwrite) BOOL isAnonymousUser;
@property (nonatomic,assign) NSString * _Nullable sessionID;
@property (nonatomic,assign) NSString * _Nullable avatarURL;
@property (nonatomic,assign) NSString * _Nullable studioAvatarURL;
@property (nonatomic,strong) NSData * _Nullable deviceToken;


// optional: listen for prompting feedback
extern NSString* _Nonnull const PTDidPresentFeedbackNotification;
extern NSString* _Nonnull const PTDidDismissFeedbackNotification;

// optional: listen for changes in user profile data
extern NSString* _Nonnull const PTDidReceiveUserUpdateNotification;

// optional: listen for if the SDK was able to start
extern NSString* _Nonnull const PTDidReceiveStartNotification;

// optional: event data which can be send. Use NSDictionary
@property (nonatomic,strong) NSDictionary * _Nullable eventData;

extern NSString *_Nonnull const apiURL;

+ (PTConnect * _Nonnull)manager;


// initialize playtest SDK. Set FeedbackID and ApiKey manually before calling this method
- (void) setup;

// initialize playtest SDK with all properties at once
- (void) setupFeedbackID:(NSString *_Nonnull)feedbackID withApiKey:(NSString *_Nonnull)apikey;

// mark checkpoint with NSString payload. This string needs to be a JSON in order to serialize
- (void) markCheckpoint:(NSString *_Nonnull)checkpoint withScreenshot:(BOOL)addScreenshot withEventString:(NSString * _Nullable)sendEventData onCompletion:(void (^_Null_unspecified)(NSData *_Nullable responseData, NSError *_Nullable error))onCompletion;

// mark checkpoint with NSDictionary
- (void) markCheckpoint:(NSString *_Nonnull)checkpoint withScreenshot:(BOOL)addScreenshot withEventData:(NSDictionary * _Nullable)sendEventData onCompletion:(void (^_Null_unspecified)(NSData *_Nullable responseData, NSError *_Nullable error))onCompletion;


// OPTIONALS
// Setup log level for debugging purposes (PTLogLevel can either be PTLogLevelNone, PTLogLevelDebug, PTLoglevelVerbose)
- (void) setLogLevel:(PTLogLevel)loglevel;

// set playtest viewcontroller manually
- (void) setRootViewController:(UIViewController *_Nonnull)controller;

// get current registered viewcontroller to pop all playtest events
- (UIViewController *_Nonnull) getCurrentRootViewController;

// show or dismiss engagementview. Can be used to manually control when the view is displayed. [[PTConnect manager]showEngagementView:NO]; at launch will disable the automatic displaying
-(void)showEngagementView:(BOOL)state;

// skip engagement view and show feedback screen directly
- (void) presentFeedbackScreen:(id _Nonnull)sender;

// Setup push notification
- (void) setPushNotification:(NSData *_Nullable)deviceToken;
- (void) didReceivePushNotification:(NSDictionary *_Nullable)userInfo;

// get current SDK version
- (NSString *_Nonnull) getSDKVersionNumber;


// BETA FEATURES
// record screen
- (void) startScreenRecording;
- (void) stopScreenRecording;
- (void) promptUserForFeedbackWithQuestion:(NSString * _Nullable)question presentingViewController:(UIViewController * _Nonnull)viewcontroller;
- (NSString *_Nonnull) getUserDeviceID;








@end
