#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"LearnFlexMobile";
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

- (void)buildMenuWithBuilder:(id<UIMenuBuilder>)builder {
  [super buildMenuWithBuilder:builder];
  [builder removeMenuForIdentifier: UIMenuFile];
  [builder removeMenuForIdentifier: UIMenuEdit];
  [builder removeMenuForIdentifier: UIMenuFormat];
  NSMutableArray* actions = [[NSMutableArray alloc] init];

  [actions addObject:[UIAction actionWithTitle:@"Frequently Asked Questions"
                                         image:nil
                                    identifier:nil
                                       handler:^(__kindof UIAction* _Nonnull action) {
    [self openHelpUrl: @"https://matthewrobertsdev.github.io/celeritasapps/#/faq"];
  }]];
  
  [actions addObject:[UIAction actionWithTitle:@"Homepage"
                                         image:nil
                                    identifier:nil
                                       handler:^(__kindof UIAction* _Nonnull action) {
    [self openHelpUrl: @"https://matthewrobertsdev.github.io/celeritasapps/#/"];
  }]];
  
  [actions addObject:[UIAction actionWithTitle:@"Contact the Developer"
                                         image:nil
                                    identifier:nil
                                       handler:^(__kindof UIAction* _Nonnull action) {
    [self openHelpUrl: @"https://matthewrobertsdev.github.io/celeritasapps/#/contact"];
  }]];
  
  [actions addObject:[UIAction actionWithTitle:@"Privacy Policy"
                                         image:nil
                                    identifier:nil
                                       handler:^(__kindof UIAction* _Nonnull action) {
    [self openHelpUrl: @"https://matthewrobertsdev.github.io/celeritasapps/#/privacy"];
  }]];

  UIMenu* menu =
  [UIMenu menuWithTitle:@"Help"
               children:actions];
  [builder replaceMenuForIdentifier:UIMenuHelp withMenu: menu];
}

- (void)openHelpUrl:(NSString *) urlString {
  UIApplication *application = [UIApplication sharedApplication];
  NSURL *URL = [NSURL URLWithString:urlString];
  [application openURL:URL options:@{} completionHandler:nil];
}

/// This method controls whether the `concurrentRoot`feature of React18 is turned on or off.
///
/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html
/// @note: This requires to be rendering on Fabric (i.e. on the New Architecture).
/// @return: `true` if the `concurrentRoot` feature is enabled. Otherwise, it returns `false`.
- (BOOL)concurrentRootEnabled
{
  return true;
}

@end
