"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "./ui/switch";
import { useState } from "react";

export function CookiePreferences() {
  const [performanceAnalytics, setPerformanceAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(true);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="dialog-trigger-btn">Cookie Preferences</div>
      </DialogTrigger>
      <DialogContent className="cookie-modal-body max-w-[680px] bg-[#0e1013] border-none sm:rounded-none px-10 pt-12 pb-10">
        <DialogHeader>
          <DialogTitle className="modal-header">Manage Cookies</DialogTitle>
        </DialogHeader>
        <div className="modal-content">
          {/* Necessary Cookies */}
          <div className="content-item">
            <div>
              <h3 className="item-title">Necessary</h3>
              <p className="item-text">
                Required to enable core site functionality and to remember user
                preferences and choices, such as language preferences or
                customized settings.
              </p>
            </div>
            <span className="text-white text-xs whitespace-nowrap">
              Always on
            </span>
          </div>

          <hr />

          {/* Performance And Analytics */}
          <div className="content-item">
            <div>
              <h3 className="item-title">Performance and Analytics</h3>
              <p className="item-text">
                These cookies provide quantitative measures of website visitors.
                With the usage of these cookies we are able to count visits and
                traffic sources to improve the performance of our site.
              </p>
            </div>
            <div className="action-container">
              <p>{performanceAnalytics ? "On" : "Off"}</p>
              <Switch
                className="data-[state=checked]:bg-[#08a885]"
                checked={performanceAnalytics}
                onCheckedChange={setPerformanceAnalytics}
              />
            </div>
          </div>

          <hr />

          {/* Advertising */}
          <div className="content-item">
            <div>
              <h3 className="item-title">Advertising</h3>
              <p className="item-text">
                These cookies are used by advertising companies to serve ads
                that are relevant to your interests.
              </p>
            </div>
            <div className="action-container">
              <p>{advertising ? "On" : "Off"}</p>
              <Switch
                className="data-[state=checked]:bg-[#08a885]"
                checked={advertising}
                onCheckedChange={setAdvertising}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="submit-btn">
            Save Preferences
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
