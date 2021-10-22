const linksSocialMedia = {
  github: 'cezarazvdo',
  youtube: 'channel/UC7y0CPNhk0qh_Bat1gRuMOA',
  facebook: 'cezar.augusto.3979',
  instagram: 'cezardeazvdo',
  twitter: 'cezarazvdo'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
