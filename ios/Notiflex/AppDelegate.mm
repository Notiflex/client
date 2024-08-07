#import "AppDelegate.h"
#import <RNKakaoLogins.h>
#import <React/RCTBundleURLProvider.h>
#import <NaverThirdPartyLogin/NaverThirdPartyLoginConnection.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"Notiflex";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
  // naver
  if ([url.scheme isEqualToString:@"NotiflexNaverLogin"]) {
    return [[NaverThirdPartyLoginConnection getSharedInstance] application:application openURL:url options:options];
  }
  // kakao
  if ([RNKakaoLogins isKakaoTalkLoginUrl:url]) {
    [RNKakaoLogins handleOpenUrl: url];
  }
  return NO;
}

@end
