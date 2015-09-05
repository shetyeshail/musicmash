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

    func BoolToInstruction(b: Bool) -> String{
        if (b) {
            return "pause"
        } else {
            return "play"
        }
    }
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
        let urlPath = String("http://"+domain+"/trigger/"+token+"/"+BoolToInstruction(playing))
        let url: NSURL = NSURL(string: urlPath)!
        let request : NSURLRequest = NSURLRequest(URL: url)
        var response: NSURLResponse?
        var dataVal: NSData =  try! NSURLConnection.sendSynchronousRequest(request, returningResponse: &response)
        playing = !playing
    }
}
