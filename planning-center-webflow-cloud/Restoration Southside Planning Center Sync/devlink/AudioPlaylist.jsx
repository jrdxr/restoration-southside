"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AudioPlaylist.module.css";

export function AudioPlaylist({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "player_container")} tag="div">
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "u-embed-css")}
        value="%3Cstyle%3E%0A.player_container%20%7B%0A%20%20%20%20--player-primary%3A%20var(--swatch--brand-500)%3B%0A%20%20%20%20--player-dark%3A%20color-mix(in%20srgb%2C%20var(--player-primary)%2C%20black%2030%25)%3B%0A%20%20%20%20--player-semi-dark%3A%20color-mix(in%20srgb%2C%20var(--player-primary)%2C%20black%2015%25)%3B%0A%20%20%20%20--player-light%3A%20color-mix(in%20srgb%2C%20var(--player-primary)%2C%20white%2060%25)%3B%0A%20%20%20%20--player-semi-light%3A%20color-mix(in%20srgb%2C%20var(--player-primary)%2C%20white%2015%25)%3B%0A%20%20%20%20--player-white%3A%20%23ffffff%3B%0A%20%20%20%20--player-black%3A%20%2327272a%3B%0A%20%20%20%20text-align%3A%20start%3B%0A%20%20%20%20background%3A%20var(--player-primary)%3B%0A%20%20%20%20border%3A%201px%20solid%20var(--player-black)%3B%0A%20%20%20%20border-radius%3A%2012px%3B%0A%20%20%20%20max-width%3A%201440px%3B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20box-shadow%3A%200%204px%206px%20-1px%20rgb(0%200%200%20%2F%200.3)%2C%200%202px%204px%20-2px%20rgb(0%200%200%20%2F%200.3)%3B%0A%7D%0A%0A.now_playing%20%7B%0A%20%20%20%20padding%3A%2028px%2024px%2024px%3B%0A%20%20%20%20background%3A%20var(--player-dark)%3B%0A%20%20%20%20border-bottom%3A%201px%20solid%20var(--player-black)%3B%0A%7D%0A%0A.now_playing%20h4%20%7B%0A%20%20%20%20font-size%3A%200.75rem%3B%0A%20%20%20%20font-weight%3A%20500%3B%0A%20%20%20%20color%3A%20var(--player-light)%3B%0A%20%20%20%20margin-bottom%3A%2012px%3B%0A%20%20%20%20text-transform%3A%20uppercase%3B%0A%20%20%20%20letter-spacing%3A%200.08em%3B%0A%7D%0A%0A.now_playing%20h3%20%7B%0A%20%20%20%20font-size%3A%201.375rem%3B%0A%20%20%20%20font-weight%3A%20600%3B%0A%20%20%20%20color%3A%20var(--player-white)%3B%0A%20%20%20%20line-height%3A%201.3%3B%0A%20%20%20%20margin-bottom%3A%204px%3B%0A%7D%0A%0A.now_playing_artist%20%7B%0A%20%20%20%20font-size%3A%200.9375rem%3B%0A%20%20%20%20color%3A%20var(--player-light)%3B%0A%20%20%20%20font-weight%3A%20400%3B%0A%7D%0A%0A.player_wrapper%20%7B%0A%20%20%20%20padding%3A%2024px%3B%0A%20%20%20%20background%3A%20var(--player-primary)%3B%0A%20%20%20%20border-bottom%3A%201px%20solid%20var(--player-semi-dark)%3B%0A%7D%0A%0Aaudio%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%2048px%3B%0A%20%20%20%20border-radius%3A%208px%3B%0A%20%20%20%20outline%3A%20none%3B%0A%7D%0A%0A.player_controls%20%7B%0A%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20gap%3A%2010px%3B%0A%20%20%20%20margin-top%3A%2018px%3B%0A%7D%0A%0A.control_btn%20%7B%0A%20%20%20%20flex%3A%201%3B%0A%20%20%20%20background%3A%20var(--player-dark)%3B%0A%20%20%20%20color%3A%20var(--player-white)%3B%0A%20%20%20%20border%3A%201px%20solid%20var(--player-semi-dark)%3B%0A%20%20%20%20padding%3A%2011px%2018px%3B%0A%20%20%20%20border-radius%3A%208px%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20font-size%3A%200.875rem%3B%0A%20%20%20%20font-weight%3A%20500%3B%0A%20%20%20%20transition%3A%20all%200.15s%3B%0A%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20justify-content%3A%20center%3B%0A%20%20%20%20gap%3A%207px%3B%0A%7D%0A%0A.control_btn%3Ahover%20%7B%0A%20%20%20%20background%3A%20var(--player-semi-dark)%3B%0A%20%20%20%20border-color%3A%20var(--player-black)%3B%0A%7D%0A%0A.control_btn%3Aactive%20%7B%0A%20%20%20%20transform%3A%20scale(0.98)%3B%0A%7D%0A%0A.playlist%20%7B%0A%20%20%20%20list-style%3A%20none%3B%0A%20%20%20%20max-height%3A%20340px%3B%0A%20%20%20%20overflow-y%3A%20auto%3B%0A%7D%0A%0A.playlist_item%20%7B%0A%20%20%20%20padding%3A%2016px%2024px%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20border-bottom%3A%201px%20solid%20var(--player-semi-dark)%3B%0A%20%20%20%20transition%3A%20background%200.15s%3B%0A%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20gap%3A%2014px%3B%0A%7D%0A%0A.playlist_item%3Alast-child%20%7B%0A%20%20%20%20border-bottom%3A%20none%3B%0A%7D%0A%0A.playlist_item%3Ahover%20%7B%0A%20%20%20%20background%3A%20var(--player-semi-dark)%3B%0A%7D%0A%0A.playlist_item.active%20%7B%0A%20%20%20%20background%3A%20var(--player-dark)%3B%0A%7D%0A%0A.playlist_item.active%20.track_number%20%7B%0A%20%20%20%20background%3A%20var(--player-white)%3B%0A%20%20%20%20color%3A%20var(--player-primary)%3B%0A%7D%0A%0A.track_number%20%7B%0A%20%20%20%20width%3A%2036px%3B%0A%20%20%20%20height%3A%2036px%3B%0A%20%20%20%20border-radius%3A%208px%3B%0A%20%20%20%20background%3A%20var(--player-dark)%3B%0A%20%20%20%20border%3A%201px%20solid%20var(--player-semi-dark)%3B%0A%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20justify-content%3A%20center%3B%0A%20%20%20%20font-size%3A%200.875rem%3B%0A%20%20%20%20font-weight%3A%20600%3B%0A%20%20%20%20flex-shrink%3A%200%3B%0A%20%20%20%20color%3A%20var(--player-light)%3B%0A%7D%0A%0A.track_info%20%7B%0A%20%20%20%20flex%3A%201%3B%0A%20%20%20%20min-width%3A%200%3B%0A%7D%0A%0A.track_title%20%7B%0A%20%20%20%20font-weight%3A%20500%3B%0A%20%20%20%20font-size%3A%200.9375rem%3B%0A%20%20%20%20color%3A%20var(--player-white)%3B%0A%20%20%20%20white-space%3A%20nowrap%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20text-overflow%3A%20ellipsis%3B%0A%20%20%20%20margin-bottom%3A%202px%3B%0A%7D%0A%0A.track_artist%20%7B%0A%20%20%20%20font-size%3A%200.8125rem%3B%0A%20%20%20%20color%3A%20var(--player-light)%3B%0A%20%20%20%20white-space%3A%20nowrap%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20text-overflow%3A%20ellipsis%3B%0A%7D%0A%0A.playlist%3A%3A-webkit-scrollbar%20%7B%0A%20%20%20%20width%3A%206px%3B%0A%7D%0A%0A.playlist%3A%3A-webkit-scrollbar-track%20%7B%0A%20%20%20%20background%3A%20transparent%3B%0A%7D%0A%0A.playlist%3A%3A-webkit-scrollbar-thumb%20%7B%0A%20%20%20%20background%3A%20var(--player-semi-dark)%3B%0A%20%20%20%20border-radius%3A%203px%3B%0A%7D%0A%0A.playlist%3A%3A-webkit-scrollbar-thumb%3Ahover%20%7B%0A%20%20%20%20background%3A%20var(--player-dark)%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
      <_Builtin.Block className={_utils.cx(_styles, "now_playing")} tag="div">
        <_Builtin.Heading tag="h4">{"Now Playing"}</_Builtin.Heading>
        <_Builtin.Heading tag="h3" id="current-track-title">
          {"Heading"}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "now_playing_artist")}
          tag="div"
          id="current-track-artist"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "player_wrapper")}
        tag="div"
      >
        <_Builtin.DOM tag="audio" slot="" controls="true" id="player">
          <_Builtin.DOM tag="source" slot="" src="" type="audio/ogg" />
        </_Builtin.DOM>
        <_Builtin.Block
          className={_utils.cx(_styles, "player_controls")}
          tag="div"
        >
          <_Builtin.DOM
            className={_utils.cx(_styles, "control_btn")}
            tag="button"
            slot=""
            id="prev-btn"
          >
            {"Prev"}
          </_Builtin.DOM>
          <_Builtin.DOM
            className={_utils.cx(_styles, "control_btn")}
            tag="button"
            slot=""
            id="next-btn"
          >
            {"Next"}
          </_Builtin.DOM>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.NotSupported _atom="DynamoWrapper" />
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "u-embed-js")}
        value="%3Cscript%3E%0Adocument.addEventListener(%22DOMContentLoaded%22%2C%20function%20()%20%7B%0A%20%20document.querySelectorAll(%22.player_container%22).forEach((component)%20%3D%3E%20%7B%0A%20%20%20%20if%20(component.dataset.scriptInitialized)%20return%3B%0A%20%20%20%20component.dataset.scriptInitialized%20%3D%20%22true%22%3B%0A%09%09%09%2F%2F%0A%20%20%20%20%09const%20playlistItems%20%3D%20document.querySelectorAll('.playlist_item')%3B%0A%20%20%20%20%20%20%20%20const%20currentTrackTitle%20%3D%20document.getElementById('current-track-title')%3B%0A%20%20%20%20%20%20%20%20const%20currentTrackArtist%20%3D%20document.getElementById('current-track-artist')%3B%0A%20%20%20%20%20%20%20%20const%20audioElement%20%3D%20document.getElementById('player')%3B%0A%20%20%20%20%20%20%20%20const%20prevBtn%20%3D%20document.getElementById('prev-btn')%3B%0A%20%20%20%20%20%20%20%20const%20nextBtn%20%3D%20document.getElementById('next-btn')%3B%0A%0A%20%20%20%20%20%20%20%20let%20currentTrackIndex%20%3D%200%3B%0A%0A%20%20%20%20%20%20%20%20playlistItems.forEach((track%2C%20index)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20track.querySelector('.track_number').innerText%20%3D%20index%20%2B%201%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20function%20loadTrack(index%2C%20state)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20item%20%3D%20playlistItems%5Bindex%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20src%20%3D%20item.getAttribute('data-src')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20type%20%3D%20item.getAttribute('data-type')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20artist%20%3D%20item.getAttribute('data-artist')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20title%20%3D%20item.querySelector('.track_title').textContent%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20audioElement.src%20%3D%20src%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20audioElement.type%20%3D%20type%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20currentTrackTitle.textContent%20%3D%20title%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20currentTrackArtist.textContent%20%3D%20artist%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20playlistItems.forEach(item%20%3D%3E%20item.classList.remove('active'))%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20item.classList.add('active')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20currentTrackIndex%20%3D%20index%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(state%20%3D%3D%3D%20undefined)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20audioElement.play()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20nextTrack()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20loadTrack((currentTrackIndex%20%2B%201)%20%25%20playlistItems.length)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20prevTrack()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20loadTrack((currentTrackIndex%20-%201%20%2B%20playlistItems.length)%20%25%20playlistItems.length)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20playlistItems.forEach((item%2C%20index)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20item.addEventListener('click'%2C%20()%20%3D%3E%20loadTrack(index))%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20audioElement.addEventListener('ended'%2C%20nextTrack)%3B%0A%20%20%20%20%20%20%20%20prevBtn.addEventListener('click'%2C%20prevTrack)%3B%0A%20%20%20%20%20%20%20%20nextBtn.addEventListener('click'%2C%20nextTrack)%3B%0A%0A%20%20%20%20%20%20%20%20document.addEventListener('keydown'%2C%20(e)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(e.key%20%3D%3D%3D%20'ArrowDown'%20%7C%7C%20e.key%20%3D%3D%3D%20'n')%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20e.preventDefault()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20nextTrack()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(e.key%20%3D%3D%3D%20'ArrowUp'%20%7C%7C%20e.key%20%3D%3D%3D%20'p')%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20e.preventDefault()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20prevTrack()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20loadTrack(0%2C%20'wait')%3B%0A%20%20%20%20%20%20%20%20%2F%2F%0A%20%20%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
