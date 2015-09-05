//
//  InterfaceController.swift
//  MusicMash WatchKit Extension
//
//  Created by Larry Xiao on 9/5/15.
//  Copyright (c) 2015 MusicMash. All rights reserved.
//

import WatchKit
import Foundation

var playing : Bool = false
var token = "123"
let domain = "45.79.167.126"
//www.musicmash.co

class InterfaceController: WKInterfaceController {

    override func awakeWithContext(context: AnyObject?) {
        super.awakeWithContext(context)
        
        // Configure interface objects here.
    }

    override func willActivate() {
        // This method is called when watch view controller is about to be visible to user
        super.willActivate()
    }

    override func didDeactivate() {
        // This method is called when watch view controller is no longer visible
        super.didDeactivate()
    }

    @IBAction func trigger() {
        let urlPath = String(format: "http://%s/trigger/%s/%d", arguments: [domain, token, playing])
        var url: NSURL = NSURL(string: urlPath)!
        var request : NSURLRequest = NSURLRequest(URL: url)
        var dataVal: NSData =  NSURLConnection.sendSynchronousRequest(request, returningResponse: nil, error:nil)!
        playing = !playing
    }
}
